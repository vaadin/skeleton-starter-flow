package org.vaadin.example;

import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;

@Route(value = "admin", layout = MainLayout.class)
@PageTitle("Admin View")
public class AdminView extends VerticalLayout {

    public AdminView() {
        add(new H1("ADMIN View"));
    }
}