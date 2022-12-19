package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class OccupiedData extends BaseEntity{
    private int tableNo;
    private int customerCount;
    @DateTimeFormat(style = "yyyy-MM-dd HH:mm")
    private Long time;
}
