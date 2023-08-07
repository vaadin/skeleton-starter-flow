package org.vaadin.example.security;

import org.vaadin.example.LoginView;

import com.vaadin.flow.server.ServiceInitEvent;
import com.vaadin.flow.server.VaadinServiceInitListener;

/**
 * {@link VaadinServiceInitListener} that enables route path security, providing
 * a Shiro implementation of
 * {@link com.vaadin.flow.server.auth.AccessPathChecker}.
 */
public class AccessCheckerInitializer implements VaadinServiceInitListener {

    @Override
    public void serviceInit(ServiceInitEvent serviceInitEvent) {
        VaadinShiroEnvironment.installRoutePathAccessChecker(serviceInitEvent,
                LoginView.class);
    }
}