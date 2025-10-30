package org.vaadin.example;

import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.router.Route;

/**
 * The main view contains a text field for getting the user name and a button
 * that shows a greeting message on a new line.
 */
// http://localhost:8080/main/
@Route("")
public class MainView extends VerticalLayout {

    public MainView() {
        add(new LoginForm());
    }
}
