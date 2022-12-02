package org.vaadin.example;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.Route;

@Route("example2")
public class LoginFormView extends Div {

    public LoginFormView() {
        LoginForm form = new LoginForm();
        form.setPasswordLabel("password");
        form.setUserNameLabel("user");
        add(form);
    }

}
