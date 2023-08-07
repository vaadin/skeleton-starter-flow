package org.vaadin.example.security;

import jakarta.servlet.DispatcherType;
import jakarta.servlet.ServletContainerInitializer;
import jakarta.servlet.ServletContext;
import java.util.EnumSet;
import java.util.Set;

import org.apache.shiro.web.env.EnvironmentLoader;
import org.apache.shiro.web.env.EnvironmentLoaderListener;
import org.apache.shiro.web.servlet.ShiroFilter;

/**
 * Initializer for Shiro security framework.
 * 
 * Sets a custom Shiro {@link org.apache.shiro.web.env.WebEnvironment} to allow
 * integration with Vaadin view security mechanism.
 */
public class ShiroSecurityDeployer implements ServletContainerInitializer {
    @Override
    public void onStartup(Set<Class<?>> set, ServletContext servletContext) {
        servletContext.setInitParameter(
                EnvironmentLoader.ENVIRONMENT_CLASS_PARAM,
                VaadinShiroEnvironment.class.getName());
        servletContext.addListener(EnvironmentLoaderListener.class);
        servletContext.addFilter("ShiroFilter", ShiroFilter.class)
                .addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class),
                        false, "/*");
    }
}
