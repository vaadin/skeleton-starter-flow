package org.vaadin.example;

import com.vaadin.flow.component.button.Button;
import com.vaadin.flow.component.button.ButtonVariant;
import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.component.html.H1;
import com.vaadin.flow.component.html.Span;
import com.vaadin.flow.component.orderedlayout.VerticalLayout;
import com.vaadin.flow.component.textfield.TextField;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.PageTitle;
import com.vaadin.flow.router.Route;
import com.vaadin.flow.server.VaadinSession;

@Route(value = "perms/:action(read|edit)", layout = MainLayout.class)
@PageTitle("Permission View")
public class PermissionView extends VerticalLayout
        implements BeforeEnterObserver {

    private Div container = new Div();

    public PermissionView() {
        add(new H1("Permission View"), container);
    }

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        container.removeAll();
        String secret = getOrSetDefaultSecret();
        switch (event.getRouteParameters().get("action").orElse("")) {
        case "edit" -> {
            TextField textField = new TextField("Secret", secret,
                    "Enter new secret");
            Button save = new Button("Save",
                    ev -> setSecret(textField.getValue()));
            save.addThemeVariants(ButtonVariant.LUMO_PRIMARY);
            container.add(textField, save);
        }
        case "read" -> container.add(new Span("Secret: " + secret));
        default -> container.add(new Span("OOOOPS! Something went wrong"));
        }
    }

    // ---------------------------------------------------
    // Only for demo purpose, DO NOT DO THIS IN PRODUCTION
    private static String getOrSetDefaultSecret() {
        VaadinSession vaadinSession = VaadinSession.getCurrent();
        String secret = (String) vaadinSession.getAttribute("SECRET");
        if (secret == null) {
            secret = "SECRET";
            vaadinSession.setAttribute("SECRET", secret);
        }
        return secret;
    }

    private static void setSecret(String secret) {
        VaadinSession.getCurrent().setAttribute("SECRET", secret);
    }
    // ---------------------------------------------------
}