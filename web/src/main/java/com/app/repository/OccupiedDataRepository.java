package com.app.repository;


import com.app.entity.OccupiedData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@EnableJpaRepositories
public interface OccupiedDataRepository extends JpaRepository<OccupiedData, UUID> {
    List<OccupiedData> findDataByTableId(int tableNo);
    OccupiedData findDataById(int id);
    List<OccupiedData> findDataByDataTime(long time);
}