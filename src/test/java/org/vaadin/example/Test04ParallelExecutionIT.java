package org.vaadin.example;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.parallel.Execution;
import org.junit.jupiter.api.parallel.ExecutionMode;
import org.openqa.selenium.Capabilities;
import org.openqa.selenium.WebDriver;

import com.vaadin.flow.component.button.testbench.ButtonElement;
import com.vaadin.flow.component.notification.testbench.NotificationElement;
import com.vaadin.testbench.TestBenchTest;
import com.vaadin.testbench.TestBenchTestBase;
import com.vaadin.testbench.annotations.RunLocally;
import com.vaadin.testbench.parallel.Browser;

@RunLocally(Browser.CHROME)
@Execution(ExecutionMode.SAME_THREAD)
public class Test04ParallelExecutionIT extends TestBenchTestBase {

    @TestBenchTest
    public void clickButton_notificationShown1(WebDriver driver, Capabilities capabilities) {
        driver.get("http://localhost:8080");
        $(ButtonElement.class).first().click();
        Assertions.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }

    @TestBenchTest
    public void clickButton_notificationShown2(WebDriver driver, Capabilities capabilities) {
        driver.get("http://localhost:8080");
        $(ButtonElement.class).first().click();
        Assertions.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }

    @TestBenchTest
    public void clickButton_notificationShown3(WebDriver driver, Capabilities capabilities) {
        driver.get("http://localhost:8080");
        $(ButtonElement.class).first().click();
        Assertions.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }

    @TestBenchTest
    public void clickButton_notificationShown4(WebDriver driver, Capabilities capabilities) {
        driver.get("http://localhost:8080");
        $(ButtonElement.class).first().click();
        Assertions.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }

}
