package org.vaadin.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;

import com.vaadin.flow.component.button.testbench.ButtonElement;
import com.vaadin.flow.component.html.testbench.ParagraphElement;
import com.vaadin.flow.component.textfield.testbench.TextFieldElement;
import com.vaadin.flow.theme.lumo.Lumo;
import org.openqa.selenium.Keys;
import com.vaadin.testbench.BrowserTest;
import com.vaadin.testbench.BrowserTestBase;

public class MainViewIT extends BrowserTestBase {

    /**
     * If running on CI, get the host name from environment variable HOSTNAME
     *
     * @return the host name
     */
    private static String getDeploymentHostname() {
        String hostname = System.getenv("HOSTNAME");
        if (hostname != null && !hostname.isEmpty()) {
            return hostname;
        }
        return "localhost";
    }

    @BeforeEach
    public void open() {
        getDriver().get("http://"+getDeploymentHostname()+":8080/");
    }

    @BrowserTest
    public void clickingButtonAddsParagraph() {
        Assertions.assertFalse($(ParagraphElement.class).exists());
        $(ButtonElement.class).first().click();
        Assertions.assertTrue($(ParagraphElement.class).exists());
    }

    @BrowserTest
    public void clickingButtonTwiceShowsTwoNotifications() {
        Assertions.assertFalse($(ParagraphElement.class).exists());
        ButtonElement button = $(ButtonElement.class).first();
        button.click();
        button.click();
        Assertions.assertEquals(2, $(ParagraphElement.class).all().size());
    }

    @BrowserTest
    public void testClickButtonShowsHelloAnonymousUserNotificationWhenUserNameIsEmpty() {
        ButtonElement button = $(ButtonElement.class).first();
        button.click();
        Assertions.assertTrue($(ParagraphElement.class).exists());
        ParagraphElement msg = $(ParagraphElement.class).first();
        Assertions.assertEquals("Hello anonymous user", msg.getText());
    }

    @BrowserTest
    public void testClickButtonShowsHelloUserNotificationWhenUserIsNotEmpty() {
        TextFieldElement textField = $(TextFieldElement.class).first();
        textField.setValue("Vaadiner");
        ButtonElement button = $(ButtonElement.class).first();
        button.click();
        Assertions.assertTrue($(ParagraphElement.class).exists());
        ParagraphElement msg = $(ParagraphElement.class).first();
        Assertions.assertEquals("Hello Vaadiner", msg.getText());
    }

    @BrowserTest
    public void testEnterShowsHelloUserNotificationWhenUserIsNotEmpty() {
        TextFieldElement textField = $(TextFieldElement.class).first();
        textField.setValue("Vaadiner");
        textField.sendKeys(Keys.ENTER);
        Assertions.assertTrue($(ParagraphElement.class).exists());
        ParagraphElement msg = $(ParagraphElement.class).first();
        Assertions.assertEquals("Hello Vaadiner", msg.getText());
    }
}
