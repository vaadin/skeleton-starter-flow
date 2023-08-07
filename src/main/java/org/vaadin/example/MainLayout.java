package org.vaadin.example;

import org.vaadin.example.security.SecurityUtils;

import com.vaadin.flow.component.applayout.AppLayout;
import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.HorizontalLayout;
import com.vaadin.flow.router.RouteParameters;
import com.vaadin.flow.router.RouterLink;

public class MainLayout extends AppLayout {

    public MainLayout() {
        H1 logo = new H1("Vaadin CRM");
        logo.addClassName("logo");
        HorizontalLayout header;
        if (SecurityUtils.isAuthenticated()) {
            Button logout = new Button("Logout",
                    click -> SecurityUtils.logout());
            header = new HorizontalLayout(logo, logout);
        } else {
            header = new HorizontalLayout(logo);
        }

        // Other page components omitted.
        addToNavbar(header);
        addToDrawer(new RouterLink("Private", PrivateView.class),
                new RouterLink("Admin", AdminView.class),
                new RouterLink("Read Secret", PermissionView.class,
                        new RouteParameters("action", "read")),
                new RouterLink("Edit Secret", PermissionView.class,
                        new RouteParameters("action", "edit")),
                new RouterLink("Home", MainView.class));
    }
}