package com.vaadin.starter.skeleton;

import org.junit.Assert;
import org.junit.Test;

import com.vaadin.flow.component.button.testbench.ButtonElement;
import com.vaadin.flow.component.notification.testbench.NotificationElement;

public class MainViewIT extends AbstractViewTest {

    @Test
    public void clickingButtonShowsNotification() {

        Assert.assertFalse($(NotificationElement.class).exists());

        $(ButtonElement.class).first().click();

        Assert.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }
}
