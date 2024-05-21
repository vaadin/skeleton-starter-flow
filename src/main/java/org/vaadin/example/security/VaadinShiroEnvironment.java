package org.vaadin.example.security;

import jakarta.servlet.Filter;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletContext;
import jakarta.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.security.Principal;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Predicate;
import java.util.regex.Pattern;
import java.util.stream.Stream;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.server.HandlerHelper;
import com.vaadin.flow.server.ServiceInitEvent;
import com.vaadin.flow.server.VaadinServletContext;
import com.vaadin.flow.server.auth.AccessPathChecker;
import com.vaadin.flow.server.auth.DefaultAccessCheckDecisionResolver;
import com.vaadin.flow.server.auth.NavigationAccessControl;
import com.vaadin.flow.server.auth.RoutePathAccessChecker;
import org.apache.shiro.config.ConfigurationException;
import org.apache.shiro.config.Ini;
import org.apache.shiro.web.env.IniWebEnvironment;
import org.apache.shiro.web.env.WebEnvironment;
import org.apache.shiro.web.filter.AccessControlFilter;
import org.apache.shiro.web.filter.authz.AuthorizationFilter;
import org.apache.shiro.web.filter.authz.PermissionsAuthorizationFilter;
import org.apache.shiro.web.filter.authz.RolesAuthorizationFilter;
import org.apache.shiro.web.filter.mgt.FilterChainManager;
import org.apache.shiro.web.filter.mgt.FilterChainResolver;
import org.apache.shiro.web.filter.mgt.NamedFilterList;
import org.apache.shiro.web.filter.mgt.PathMatchingFilterChainResolver;
import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * A custom Shiro {@link WebEnvironment} for Vaadin integration.
 * 
 * This implementation replaces default 'roles' and 'permissions' filters to
 * allow integration with Vaadin route path security.
 * 
 * Shiro based {@link AccessPathChecker} implementation can be installed calling
 * {@link #installRoutePathAccessChecker(ServiceInitEvent, Class)}} method from
 * a {@link com.vaadin.flow.server.VaadinServiceInitListener}.
 *
 * == Custom Vaadin Servlet Mapping
 *
 * If the Vaadin Servlet has a custom url mapping, it needs to be configured in
 * the Shiro configuration file, as in the following example
 *
 * {@literal
 * [vaadin]
 * urlMapping=/ui/*
 * }
 *
 * == Unauthorized view
 * 
 * By default, if a URL is protected with an {@link AuthorizationFilter}, when
 * the access is denied Shiro will redirect the browser to the Filter configured
 * {@literal unauthorizedUrl}. To set a Vaadin view as unauthorized URL for all
 * the authorization filters, add a {@literal unauthorizedPath} setting in the
 * {@literal vaadin} section of the configuration file, pointing to the view
 * route path.
 *
 * <pre>
 * &#64;Route("not-authorized")
 * public class My401 extends Div {
 *
 * }
 * </pre>
 * 
 * {@literal 
 * [vaadin]
 * unauthorizedPath=not-authorized
 * }
 *
 */
public class VaadinShiroEnvironment extends IniWebEnvironment {

    private static final Logger LOGGER = LoggerFactory
            .getLogger(VaadinShiroEnvironment.class);

    private String vaadinUrlMapping;
    private String unauthorizedPath;

    @Override
    protected Ini parseConfig() {
        Ini ini = super.parseConfig();
        ini.setSectionProperty("main", "roles",
                VaadinInterceptingRolesAuthorizationFilter.class.getName());
        ini.setSectionProperty("main", "perms",
                VaadinInterceptingPermissionsAuthorizationFilter.class
                        .getName());
        applyVaadinConfiguration(ini);
        return ini;
    }

    @Override
    protected FilterChainResolver createFilterChainResolver() {
        FilterChainResolver filterChainResolver = super.createFilterChainResolver();
        if (filterChainResolver instanceof PathMatchingFilterChainResolver resolver
                && resolver.getFilterChainManager() != null) {
            // Wrap the FilterChainManager to handle permissions for Flow
            // internal requests
            resolver.setFilterChainManager(new VaadinFilterChainManager(
                    resolver.getFilterChainManager(), vaadinUrlMapping));
            LOGGER.debug(
                    "Wrapped FilterChainManager into VaadinFilterChainManager");
        }
        return filterChainResolver;
    }

    private void applyVaadinConfiguration(Ini ini) {
        vaadinUrlMapping = ini.getSectionProperty("vaadin", "urlMapping", "/*");
        if (vaadinUrlMapping == null) {
            vaadinUrlMapping = "";
        } else {
            // remove potential / or /* at the end of the mapping
            vaadinUrlMapping = vaadinUrlMapping.replaceFirst("/\\*?$", "");
        }
        unauthorizedPath = applyUrlMapping(
                ini.getSectionProperty("vaadin", "unauthorizedPath"));

        Ini.Section section = ini.getSection("urls");
        Map<String, String> source = new LinkedHashMap<>(section);
        section.clear();

        if (unauthorizedPath != null) {
            section.put(unauthorizedPath, "authc");
        }
        Stream.of(HandlerHelper.getPublicResourcesRequiringSecurityContext())
                .forEach(pattern -> section.put(applyUrlMapping(pattern),
                        "anon"));
        Stream.of(HandlerHelper.getPublicResources()).forEach(
                pattern -> section.put(applyUrlMapping(pattern), "anon"));
        Stream.of(HandlerHelper.getPublicResourcesRoot()).forEach(
                pattern -> section.put(applyUrlMapping(pattern), "anon"));
        section.putAll(source);
    }

    public static void installRoutePathAccessChecker(
            ServiceInitEvent serviceInitEvent,
            Class<? extends Component> loginView) {
        ServletContext servletContext = ((VaadinServletContext) serviceInitEvent
                .getSource().getContext()).getContext();
        WebEnvironment env = WebUtils.getRequiredWebEnvironment(servletContext);
        if (env instanceof VaadinShiroEnvironment shiroEnv && shiroEnv
                .getFilterChainResolver() instanceof PathMatchingFilterChainResolver resolver) {

            ShiroUrlsAccessPathChecker accessPathChecker = new ShiroUrlsAccessPathChecker(
                    resolver);
            RoutePathAccessChecker routePathAccessChecker = new RoutePathAccessChecker(
                    accessPathChecker);
            NavigationAccessControl navigationAccessControl = new NavigationAccessControl(
                    List.of(routePathAccessChecker),
                    new DefaultAccessCheckDecisionResolver());

            String forbiddenUrl = shiroEnv.unauthorizedPath;
            navigationAccessControl.setLoginView(loginView);
            serviceInitEvent.getSource().getRouter().getRegistry()
                    .getTargetUrl(loginView).ifPresent(loginUrl -> {
                        String fullLoginUrl;
                        if (loginUrl.startsWith("/")) {
                            fullLoginUrl = loginUrl;
                        } else {
                            fullLoginUrl = "/" + loginUrl;
                        }
                        resolver.getFilterChainManager().getFilters().values()
                                .stream()
                                .filter(AccessControlFilter.class::isInstance)
                                .map(AccessControlFilter.class::cast)
                                .forEach(filter -> {
                                    filter.setLoginUrl(fullLoginUrl);
                                    if (filter instanceof AuthorizationFilter authFilter) {
                                        authFilter.setUnauthorizedUrl(
                                                forbiddenUrl);
                                    }
                                });
                    });
            serviceInitEvent.getSource()
                    .addUIInitListener(uiInitEvent -> uiInitEvent.getUI()
                            .addBeforeEnterListener(navigationAccessControl));
            LOGGER.info("Shiro based route path access checker enabled");
        } else {
            LOGGER.warn(
                    "Current Shiro environment is not of type VaadinShiroEnvironment, could not enable route path access checker");
        }
    }

    private String applyUrlMapping(String path) {
        if (path != null) {
            if (path.startsWith("/")) {
                path = path.substring(1);
            }
            return vaadinUrlMapping + "/" + path;
        }
        return path;
    }

    public static class VaadinInterceptingRolesAuthorizationFilter
            extends RolesAuthorizationFilter implements AccessPathChecker {

        @Override
        public boolean hasAccess(String path, Principal principal,
                Predicate<String> roleChecker) {
            String[] rolesArray = this.appliedPaths.entrySet().stream()
                    .filter(entry -> pathsMatch(entry.getKey(), path))
                    .map(entry -> (String[]) entry.getValue()).findFirst()
                    .orElse(null);
            try {
                return super.isAccessAllowed(null, null, rolesArray);
            } catch (IOException ex) {
                // Should never happen, as the super method does not
                // perform operation that throws exceptions
                return false;
            }
        }
    }

    public static class VaadinInterceptingPermissionsAuthorizationFilter extends
            PermissionsAuthorizationFilter implements AccessPathChecker {

        @Override
        public boolean hasAccess(String path, Principal principal,
                Predicate<String> roleChecker) {
            String[] perms = this.appliedPaths.entrySet().stream()
                    .filter(entry -> pathsMatch(entry.getKey(), path))
                    .map(entry -> (String[]) entry.getValue()).findFirst()
                    .orElse(null);
            try {
                return super.isAccessAllowed(null, null, perms);
            } catch (IOException ex) {
                // Should never happen, as the super method does not
                // perform operation that throws exceptions
                return false;
            }
        }
    }

    // A wrapper over the default FilterChainManager that allows access to
    // Vaadin Framework requests
    private static class VaadinFilterChainManager
            implements FilterChainManager {

        private final FilterChainManager delegate;
        private final Pattern vaadinUrlPattern;

        private VaadinFilterChainManager(FilterChainManager delegate,
                String vaadinUrlMapping) {
            this.delegate = delegate;
            this.vaadinUrlPattern = Pattern
                    .compile("^" + vaadinUrlMapping + "/(\\*\\*)?$");
        }

        @Override
        public FilterChain proxy(FilterChain filterChain, String chainName) {
            FilterChain proxy = delegate.proxy(filterChain, chainName);
            if (vaadinUrlPattern.matcher(chainName).matches()) {
                return (request, response) -> {
                    HttpServletRequest httpRequest = WebUtils.toHttp(request);
                    if (HandlerHelper.isFrameworkInternalRequest(
                            httpRequest.getHttpServletMapping().getPattern(),
                            httpRequest)) {
                        filterChain.doFilter(request, response);
                    } else {
                        proxy.doFilter(request, response);
                    }
                };
            }
            return proxy;
        }

        @Override
        public Map<String, Filter> getFilters() {
            return delegate.getFilters();
        }

        @Override
        public NamedFilterList getChain(String chainName) {
            return delegate.getChain(chainName);
        }

        @Override
        public boolean hasChains() {
            return delegate.hasChains();
        }

        @Override
        public Set<String> getChainNames() {
            return delegate.getChainNames();
        }

        @Override
        public void addFilter(String name, Filter filter) {
            delegate.addFilter(name, filter);
        }

        @Override
        public void addFilter(String name, Filter filter, boolean init) {
            delegate.addFilter(name, filter, init);
        }

        @Override
        public void createChain(String chainName, String chainDefinition) {
            delegate.createChain(chainName, chainDefinition);
        }

        @Override
        public void createDefaultChain(String chainName) {
            delegate.createDefaultChain(chainName);
        }

        @Override
        public void addToChain(String chainName, String filterName) {
            delegate.addToChain(chainName, filterName);
        }

        @Override
        public void addToChain(String chainName, String filterName,
                String chainSpecificFilterConfig)
                throws ConfigurationException {
            delegate.addToChain(chainName, filterName,
                    chainSpecificFilterConfig);
        }

        @Override
        public void setGlobalFilters(List<String> globalFilterNames)
                throws ConfigurationException {
            delegate.setGlobalFilters(globalFilterNames);
        }
    }

}
