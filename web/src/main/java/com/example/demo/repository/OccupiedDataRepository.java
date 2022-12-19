package com.example.demo.repository;

import com.example.demo.entity.OccupiedData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@EnableJpaRepositories
public interface OccupiedDataRepository extends JpaRepository<OccupiedData, UUID> {
    Optional<OccupiedData> findDataByTableNo(int tableNo);
    OccupiedData findDataById(UUID id);
    Optional<OccupiedData> findDataByTime(long time);
}