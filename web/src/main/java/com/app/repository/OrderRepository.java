package com.app.repository;

import com.app.entity.FoodOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
@EnableJpaRepositories
public interface OrderRepository extends JpaRepository<FoodOrder, Integer> {
}
