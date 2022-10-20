package org.vaadin.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Assumptions;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver;

import com.vaadin.flow.component.button.testbench.ButtonElement;
import com.vaadin.flow.component.notification.testbench.NotificationElement;
import com.vaadin.testbench.TestBenchTest;
import com.vaadin.testbench.TestBenchTestBase;
import com.vaadin.testbench.annotations.RunLocally;
import com.vaadin.testbench.parallel.Browser;
import com.vaadin.testbench.parallel.BrowserUtil;

@RunLocally(Browser.CHROME) // the driver (could be multi-browser remote driver - Sauce)
public class Test03WrongBrowserIT extends TestBenchTestBase {

    @TestBenchTest
    public void clickButton_notificationShown_safari(Capabilities capabilities) {
        Assumptions.assumeTrue(BrowserUtil.isSafari(capabilities),
                "Safari test only, will not run on: " + capabilities.getBrowserName());

        driver.get("http://localhost:8080");
        $(ButtonElement.class).first().click();
        Assertions.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }

    @TestBenchTest
    public void clickButton_notificationShown_chrome(Capabilities capabilities) {
        Assumptions.assumeTrue(BrowserUtil.isChrome(capabilities));

        driver.get("http://localhost:8080");
        $(ButtonElement.class).first().click();
        Assertions.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }

}
