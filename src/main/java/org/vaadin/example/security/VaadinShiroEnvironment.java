package org.vaadin.example.security;

import jakarta.servlet.ServletContext;
import java.io.IOException;
import java.security.Principal;
import java.util.function.Function;

import org.apache.shiro.config.Ini;
import org.apache.shiro.web.env.IniWebEnvironment;
import org.apache.shiro.web.env.WebEnvironment;
import org.apache.shiro.web.filter.AccessControlFilter;
import org.apache.shiro.web.filter.authz.PermissionsAuthorizationFilter;
import org.apache.shiro.web.filter.authz.RolesAuthorizationFilter;
import org.apache.shiro.web.filter.mgt.PathMatchingFilterChainResolver;
import org.apache.shiro.web.util.WebUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.vaadin.flow.component.Component;
import com.vaadin.flow.server.ServiceInitEvent;
import com.vaadin.flow.server.VaadinServletContext;
import com.vaadin.flow.server.auth.AccessPathChecker;
import com.vaadin.flow.server.auth.RoutePathAccessChecker;

/**
 * A custom Shiro {@link WebEnvironment} for Vaadin integration.
 * 
 * This implementation replaces default 'roles' and 'permissions' filters to
 * allow integration with Vaadin route path security.
 * 
 * Shiro based {@link AccessPathChecker} implementation can be installed calling
 * {@link #installRoutePathAccessChecker(ServiceInitEvent, Class)}} method from
 * a {@link com.vaadin.flow.server.VaadinServiceInitListener}.
 */
public class VaadinShiroEnvironment extends IniWebEnvironment {

    private static final Logger LOGGER = LoggerFactory
            .getLogger(VaadinShiroEnvironment.class);

    @Override
    protected Ini parseConfig() {
        Ini ini = super.parseConfig();
        ini.setSectionProperty("main", "roles",
                VaadinInterceptingRolesAuthorizationFilter.class.getName());
        ini.setSectionProperty("main", "perms",
                VaadinInterceptingPermissionsAuthorizationFilter.class
                        .getName());

        return ini;
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
            routePathAccessChecker.setLoginView(loginView);
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
                                .forEach(filter -> filter
                                        .setLoginUrl(fullLoginUrl));
                    });
            serviceInitEvent.getSource()
                    .addUIInitListener(uiInitEvent -> uiInitEvent.getUI()
                            .addBeforeEnterListener(routePathAccessChecker));
            LOGGER.info("Shiro based route path access checker enabled");
        } else {
            LOGGER.warn(
                    "Current Shiro environment is not of type VaadinShiroEnvironment, could not enable route path access checker");
        }
    }

    public static class VaadinInterceptingRolesAuthorizationFilter
            extends RolesAuthorizationFilter implements AccessPathChecker {

        @Override
        public boolean hasAccess(String path, Principal principal,
                Function<String, Boolean> roleChecker) {
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
                Function<String, Boolean> roleChecker) {
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

}
