package org.vaadin.example;

import java.util.Collections;
import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import com.vaadin.flow.component.button.testbench.ButtonElement;
import com.vaadin.flow.component.notification.testbench.NotificationElement;
import com.vaadin.testbench.TestBenchTest;
import com.vaadin.testbench.TestBenchTestBase;
import com.vaadin.testbench.annotations.BrowserConfiguration;
import com.vaadin.testbench.annotations.RunLocally;
import com.vaadin.testbench.parallel.Browser;
import com.vaadin.testbench.parallel.BrowserUtil;

// test run on Safari
@RunLocally(Browser.SAFARI)
public class Test02SafariIT extends TestBenchTestBase {

    @TestBenchTest
    public void clickButton_notificationShown() {
        driver.get("http://localhost:8080");
        waitUntil(d -> $(ButtonElement.class).first() != null); // safari thing
        $(ButtonElement.class).first().click();
        Assertions.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }

    @BrowserConfiguration
    public List<DesiredCapabilities> getBrowserConfiguration() {
        return Collections.singletonList(BrowserUtil.safari());
    }

}
