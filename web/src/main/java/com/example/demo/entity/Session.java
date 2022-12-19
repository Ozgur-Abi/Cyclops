package com.example.demo.entity;

import com.example.demo.helper.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@EqualsAndHashCode(callSuper = true)
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Session extends BaseEntity{

    @OneToMany
    private Set<Customer> customerList;
    private int tableId;
    @DateTimeFormat(style = "yyyy-MM-dd HH:mm")
    private Long startTime;
    @DateTimeFormat(style = "yyyy-MM-dd HH:mm")
    private Long endTime;
    private double paidAmount;
    private int customerCountInSession;
}
