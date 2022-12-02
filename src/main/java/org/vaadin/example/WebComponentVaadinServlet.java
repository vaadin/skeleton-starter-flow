package org.vaadin.example;

import jakarta.servlet.annotation.WebServlet;

import com.vaadin.flow.server.VaadinServlet;

@WebServlet(urlPatterns = { "/vaadin/*" }, asyncSupported = true, loadOnStartup = 1)
public class WebComponentVaadinServlet extends VaadinServlet {
}
