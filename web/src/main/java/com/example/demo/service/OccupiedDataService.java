package com.example.demo.service;

import com.example.demo.entity.MyUserDetails;
import com.example.demo.entity.OccupiedData;
import com.example.demo.entity.User;
import com.example.demo.repository.OccupiedDataRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class OccupiedDataService{

    private final OccupiedDataRepository dataRepository;

    public void deleteData(UUID id) {
        dataRepository.deleteById(id);
    }

    public List<OccupiedData> findAll() {
        return dataRepository.findAll();
    }

    public Optional<OccupiedData> findDataByTime(long time) {
        return dataRepository.findDataByTime(time);
    }

    public Optional<OccupiedData> findDataByTableNo(int tableNo) {
        return dataRepository.findDataByTableNo(tableNo);
    }

    public OccupiedData findDataById(UUID id) {
        return dataRepository.findDataById(id);
    }

}