package com.app.repository;

import com.app.entity.Customer;
import com.app.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@EnableJpaRepositories
public interface 0CustomerRepository extends JpaRepository<Customer, UUID> {
}
