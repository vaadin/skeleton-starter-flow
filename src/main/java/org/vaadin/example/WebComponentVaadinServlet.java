package org.vaadin.example;

import com.vaadin.flow.server.VaadinServlet;
import jakarta.servlet.annotation.WebServlet;

@WebServlet(urlPatterns = { "/*" }, asyncSupported = true, loadOnStartup = 1)
public class WebComponentVaadinServlet extends VaadinServlet {
}
