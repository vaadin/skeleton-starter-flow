package com.vaadin.starter.skeleton;

import org.junit.Assert;
import org.junit.Test;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;

import com.vaadin.flow.component.button.testbench.ButtonElement;
import com.vaadin.flow.component.notification.testbench.NotificationElement;
import com.vaadin.flow.theme.lumo.Lumo;

public class MainViewIT extends AbstractViewTest {

    @Test
    public void clickingButtonShowsNotification() {
        Assert.assertFalse($(NotificationElement.class).exists());

        $(ButtonElement.class).first().click();

        Assert.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }

    @Test
    public void clickingButtonTwiceShowsTwoNotifications() {
        Assert.assertFalse($(NotificationElement.class).exists());

        ButtonElement button = $(ButtonElement.class).first();
        button.click();
        button.click();

        Assert.assertEquals(2, $(NotificationElement.class).all().size());
    }

    @Test
    public void buttonIsUsingLumoTheme() {
        WebElement element = $(ButtonElement.class).first();
        assertThemePresentOnElement(element, Lumo.class);
    }

    @Test
    public void usageStatisticIsLogged() throws InterruptedException {
        Assert.assertTrue($(ButtonElement.class).exists());
        // wait 5 seconds for collecting values in local storage
        Thread.sleep(5000);

        JavascriptExecutor js = (JavascriptExecutor) driver;
        Object mode = js.executeScript("return Vaadin.developmentMode");

        String item = (String) js.executeScript(
                "return window.localStorage.getItem('vaadin.statistics.basket');");

        if(Boolean.TRUE.equals(mode)){
            Assert.assertTrue("Under development mode, the checked usage statistics are not found",
                    item.contains("flow") && item.contains("java") && item.contains("vaadin-button"));
        } else {
            Assert.assertTrue("Under production mode, the usage statistics info should be empty",
                    (item == null || item.length() == 0));
        }

    }
}
