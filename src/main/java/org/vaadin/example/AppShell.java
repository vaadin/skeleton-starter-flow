package org.vaadin.example;

import com.vaadin.flow.component.dependency.CssImport;
import com.vaadin.flow.component.dependency.StyleSheet;
import com.vaadin.flow.component.page.AppShellConfigurator;
import com.vaadin.flow.server.PWA;
import com.vaadin.flow.theme.aura.Aura;

/**
 * Use the @PWA annotation make the application installable on phones, tablets
 * and some desktop browsers.
 */
@PWA(name = "Project Base for Vaadin", shortName = "Project Base")
@StyleSheet("styles.css")
@StyleSheet(Aura.STYLESHEET)
//@CssImport("@vaadin/aura/aura.css") // works
//@CssImport("styles-in-frontend.css")
public class AppShell implements AppShellConfigurator {
}
