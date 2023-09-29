package org.vaadin.example;

import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.router.RouteAlias;

@Route(value = "private", layout = MainLayout.class)
@RouteAlias(value = "secret", layout = MainLayout.class)
@PageTitle("Private View")
public class PrivateView extends VerticalLayout {

    public PrivateView() {
        add(new H1("Private View"));
    }
}