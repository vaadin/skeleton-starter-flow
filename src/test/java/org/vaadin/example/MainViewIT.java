package org.vaadin.example;

import com.vaadin.flow.component.button.testbench.ButtonElement;
import com.vaadin.flow.component.html.testbench.ParagraphElement;
import com.vaadin.flow.component.textfield.testbench.TextFieldElement;
import com.vaadin.flow.theme.lumo.Lumo;
import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

public class MainViewIT extends AbstractViewTest {

    @Test
    public void clickingButtonAddsParagraph() {
        Assert.assertFalse($(ParagraphElement.class).exists());
        $(ButtonElement.class).first().click();
        Assert.assertTrue($(ParagraphElement.class).exists());
    }

    @Test
    public void clickingButtonTwiceShowsTwoNotifications() {
        Assert.assertFalse($(ParagraphElement.class).exists());
        ButtonElement button = $(ButtonElement.class).first();
        button.click();
        button.click();
        Assert.assertEquals(2, $(ParagraphElement.class).all().size());
    }

    @Test
    public void buttonIsUsingLumoTheme() {
        WebElement element = $(ButtonElement.class).first();
        assertThemePresentOnElement(element, Lumo.class);
    }

    @Test
    public void testClickButtonShowsHelloAnonymousUserNotificationWhenUserNameIsEmpty() {
        ButtonElement button = $(ButtonElement.class).first();
        button.click();
        Assert.assertTrue($(ParagraphElement.class).exists());
        ParagraphElement msg = $(ParagraphElement.class).first();
        Assert.assertEquals("Hello anonymous user", msg.getText());
    }

    @Test
    public void testClickButtonShowsHelloUserNotificationWhenUserIsNotEmpty() {
        TextFieldElement textField = $(TextFieldElement.class).first();
        textField.setValue("Vaadiner");
        ButtonElement button = $(ButtonElement.class).first();
        button.click();
        Assert.assertTrue($(ParagraphElement.class).exists());
        ParagraphElement msg = $(ParagraphElement.class).first();
        Assert.assertEquals("Hello Vaadiner", msg.getText());
    }

    @Test
    public void testEnterShowsHelloUserNotificationWhenUserIsNotEmpty() {
        TextFieldElement textField = $(TextFieldElement.class).first();
        textField.setValue("Vaadiner");
        textField.sendKeys(Keys.ENTER);
        Assert.assertTrue($(ParagraphElement.class).exists());
        ParagraphElement msg = $(ParagraphElement.class).first();
        Assert.assertEquals("Hello Vaadiner", msg.getText());
    }
}
