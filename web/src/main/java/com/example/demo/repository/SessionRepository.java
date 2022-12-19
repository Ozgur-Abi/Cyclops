package com.example.demo.repository;

import com.example.demo.entity.Customer;
import com.example.demo.entity.Session;
import com.example.demo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@EnableJpaRepositories
public interface SessionRepository extends JpaRepository<Session, UUID> {
}
