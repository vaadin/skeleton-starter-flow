package org.vaadin.example;

import jakarta.annotation.security.PermitAll;

import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@Route(value = "private", layout = MainLayout.class)
@PageTitle("Private View")
@PermitAll
public class PrivateView extends VerticalLayout {

    public PrivateView() {
        add(new H1("Private View"));
    }
}