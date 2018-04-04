package com.vaadin.starter.skeleton;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.dependency.HtmlImport;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.page.BodySize;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.theme.Theme;
import com.vaadin.flow.theme.lumo.Lumo;

/**
 * The main view contains a button and a template element.
 */
@HtmlImport("styles/shared-styles.html")
@Route("")
@Theme(Lumo.class)
public class MainView extends VerticalLayout {

    public MainView() {
        ExampleTemplate template = new ExampleTemplate();

        Button button = new Button("Click me", event -> template.setValue("Clicked!"));

        add(button, template);
        setClassName("main-layout");
    }
}
