package org.vaadin.example;

import com.vaadin.flow.component.html.Div;
import com.vaadin.flow.router.BeforeEnterEvent;
import com.vaadin.flow.router.BeforeEnterObserver;
import com.vaadin.flow.router.NotFoundException;
import com.vaadin.flow.router.Route;

@Route("unauthorized")
public class UnauthorizedView extends Div implements BeforeEnterObserver {

    @Override
    public void beforeEnter(BeforeEnterEvent event) {
        if (event.getUI().getSession().getService().getDeploymentConfiguration()
                .isProductionMode()) {
            event.rerouteToError(NotFoundException.class);
        } else {
            event.rerouteToError(NotFoundException.class, "Access denied");
        }

    }
}
