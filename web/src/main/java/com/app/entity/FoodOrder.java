package com.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@EqualsAndHashCode()
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class FoodOrder{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "orderId", updatable = false, nullable = false)
    private int id;
    @ManyToOne
    private Customer customer;
    private int tableId;
    private String orderText;
}
