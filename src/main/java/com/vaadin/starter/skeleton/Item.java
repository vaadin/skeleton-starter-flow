package com.vaadin.starter.skeleton;

import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Random;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class Item implements Serializable {

    private String name;
    private double price;
    private LocalDateTime purchaseDate;
    private LocalDate estimatedDeliveryDate;
    private boolean confirmed;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public LocalDateTime getPurchaseDate() {
        return purchaseDate;
    }

    public void setPurchaseDate(LocalDateTime purchaseDate) {
        this.purchaseDate = purchaseDate;
    }

    public LocalDate getEstimatedDeliveryDate() {
        return estimatedDeliveryDate;
    }

    public void setEstimatedDeliveryDate(LocalDate estimatedDeliveryDate) {
        this.estimatedDeliveryDate = estimatedDeliveryDate;
    }

    public boolean isConfirmed() {
        return confirmed;
    }

    public void setConfirmed(boolean confirmed) {
        this.confirmed = confirmed;
    }
}

class ItemGenerator {

    public static List<Item> generateItems() {
        Random random = new Random(42);
        LocalDate baseDate = LocalDate.of(2018, 1, 10);
        return IntStream.range(1, 101)
                .mapToObj(index -> createItem(index, random, baseDate))
                .collect(Collectors.toList());
    }

    private static Item createItem(int index, Random random,
            LocalDate baseDate) {
        Item item = new Item();
        item.setName("Item " + index);
        item.setPrice(100 * random.nextDouble());
        item.setPurchaseDate(baseDate.atTime(12, 0)
                .minus(1 + random.nextInt(3600), ChronoUnit.SECONDS));
        item.setEstimatedDeliveryDate(
                baseDate.plus(1 + random.nextInt(15), ChronoUnit.DAYS));
        return item;
    }
}
