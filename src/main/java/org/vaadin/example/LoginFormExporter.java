package org.vaadin.example;

import com.vaadin.flow.component.WebComponentExporter;
import com.vaadin.flow.component.webcomponent.WebComponent;

public class LoginFormExporter
        extends WebComponentExporter<LoginForm> {
    public LoginFormExporter() {
        super("login-form");
        addProperty("userlbl", "")
                .onChange(LoginForm::setUserNameLabel);
        addProperty("pwdlbl", "")
                .onChange(LoginForm::setPasswordLabel);
    }

    @Override
    protected void configureInstance(
            WebComponent<LoginForm> webComponent,
            LoginForm form) {
        form.addLoginListener(() ->
                webComponent.fireEvent("logged-in"));
    }
}
