package com.app.repository;

import com.app.entity.ResInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
@EnableJpaRepositories
public interface ResInfoRepository extends JpaRepository<ResInfo, UUID> {
    ResInfo findDataByRestaurantNo(int id);
}