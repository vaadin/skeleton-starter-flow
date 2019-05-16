package com.vaadin.starter.skeleton.it;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Rule;
import org.junit.Test;
import org.openqa.selenium.chrome.ChromeDriver;

import com.vaadin.flow.component.button.testbench.ButtonElement;
import com.vaadin.flow.component.notification.testbench.NotificationElement;
import com.vaadin.testbench.ScreenshotOnFailureRule;
import com.vaadin.testbench.TestBenchTestCase;

public class MainViewIT extends TestBenchTestCase {
    @Rule
    public ScreenshotOnFailureRule rule = new ScreenshotOnFailureRule(this,
            true);

    @Before
    public void setup() {
        setDriver(new ChromeDriver());
        getDriver().get("http://127.0.0.1:8080");
    }

    @Test
    public void clickingButtonShowsNotification() {
        Assert.assertFalse($(NotificationElement.class).exists());

        $(ButtonElement.class).first().click();

        Assert.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }
}
