package org.vaadin.example;

import java.util.concurrent.atomic.AtomicInteger;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;

public class Test05RetryOnFailure {

    private static AtomicInteger counter = new AtomicInteger(0);

    // flaky test that requires multiple runs
    @Test
    public void increment_untilValue() {
        Assertions.assertEquals(3, counter.incrementAndGet());
    }

}