package org.vaadin.example.security;

import java.security.Principal;
import java.util.function.Predicate;

import com.vaadin.flow.server.auth.AccessPathChecker;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.apache.shiro.util.PatternMatcher;
import org.apache.shiro.web.filter.PathMatchingFilter;
import org.apache.shiro.web.filter.authc.AnonymousFilter;
import org.apache.shiro.web.filter.authc.AuthenticationFilter;
import org.apache.shiro.web.filter.authc.UserFilter;
import org.apache.shiro.web.filter.mgt.FilterChainManager;
import org.apache.shiro.web.filter.mgt.PathMatchingFilterChainResolver;
import org.apache.shiro.web.servlet.OncePerRequestFilter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Implementation of {@link AccessPathChecker} based on Shiro 'urls'
 * configuration.
 *
 * Security logic is based on well-known Shiro filters. Roles and permissions
 * filters rules are evaluated only if {@link VaadinShiroEnvironment} is in use.
 *
 * Custom filters are supported only if they implement {@link AccessPathChecker}
 * interfaces.
 *
 * See https://shiro.apache.org/web.html#urls for Shiro Web Support
 * documentation.
 */
class ShiroUrlsAccessPathChecker implements AccessPathChecker {

    private static final Logger LOGGER = LoggerFactory
            .getLogger(ShiroUrlsAccessPathChecker.class);

    private final PathMatchingFilterChainResolver resolver;

    ShiroUrlsAccessPathChecker(PathMatchingFilterChainResolver resolver) {
        this.resolver = resolver;
    }

    @Override
    public boolean hasAccess(String vaadinPath, Principal principal,
            Predicate<String> roleChecker) {
        // Shiro filters expects a leading / on path
        String path = "/" + vaadinPath;
        Subject subject = SecurityUtils.getSubject();
        PatternMatcher pathMatcher = resolver.getPathMatcher();
        FilterChainManager filterChainManager = resolver
                .getFilterChainManager();
        return filterChainManager.getChainNames().stream()
                .filter(pathPattern -> pathMatcher.matches(pathPattern, path))
                .findFirst().map(filterChainManager::getChain)
                .map(chain -> chain.stream()
                        .filter(PathMatchingFilter.class::isInstance)
                        .map(PathMatchingFilter.class::cast)
                        .filter(OncePerRequestFilter::isEnabled)
                        .map(filter -> toAccessPathChecker(subject, filter))
                        .allMatch(checker -> checker.hasAccess(path, principal,
                                roleChecker)))
                // No filters found for path, allow access
                .orElse(true);
    }

    private static AccessPathChecker toAccessPathChecker(Subject subject,
            PathMatchingFilter filter) {
        if (filter instanceof AnonymousFilter) {
            return (path, principal, roleChecker) -> {
                LOGGER.trace(
                        "Current path '{}' access allowed by 'anon' filter",
                        path);
                return true;
            };
        }
        if (filter instanceof AuthenticationFilter
                || filter instanceof UserFilter) {
            boolean authenticated = subject.isAuthenticated();
            return (path, principal, roleChecker) -> {
                if (authenticated) {
                    LOGGER.trace(
                            "Current path '{}' access allowed by authenticated user filter",
                            path);
                } else {
                    LOGGER.trace(
                            "Current path '{}' access denied by authenticated user filter",
                            path);
                }
                return authenticated;
            };
        }
        if (filter instanceof AccessPathChecker accessPathChecker) {
            return accessPathChecker;
        }
        return (path, principal, roleChecker) -> {
            LOGGER.trace(
                    "Current path '{}' access allowed because filter {} is not supported",
                    path, filter.getClass().getName());
            return true;
        };
    }

}
