package com.app.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@EqualsAndHashCode()
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class ResInfo {
    @Id
    private int restaurantNo;
    private String restaurantName;
    private int currentCustomerCount;
    private boolean open;
    private String address;
    private String telephone;

}
