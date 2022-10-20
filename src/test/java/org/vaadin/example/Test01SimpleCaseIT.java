package org.vaadin.example;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.openqa.selenium.SearchContext;
import org.openqa.selenium.WebDriver;

import com.vaadin.flow.component.button.testbench.ButtonElement;
import com.vaadin.flow.component.notification.testbench.NotificationElement;
import com.vaadin.testbench.HasElementQuery;
import com.vaadin.testbench.TestBenchTest;

// test run using default browser (Chrome)
public class Test01SimpleCaseIT implements HasElementQuery { // not extending any TestBench classes!

    private WebDriver driver;

    @BeforeEach
    public void beforeEach(WebDriver driver) { // driver injection
        this.driver = driver;
        this.driver.get("http://localhost:8080");
    }

    @TestBenchTest // test managed by TestBench
    public void clickButton_notificationShown() {
        $(ButtonElement.class).first().click();
        Assertions.assertTrue($(NotificationElement.class).waitForFirst().isOpen());
    }

    @AfterEach
    public void afterEach() {
        driver.close();
    }

    @Override
    public SearchContext getContext() { // required for $( )
        return driver;
    }
}
