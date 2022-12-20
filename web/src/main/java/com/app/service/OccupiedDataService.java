package com.app.service;

import com.app.entity.MyUserDetails;
import com.app.entity.OccupiedData;
import com.app.entity.User;
import com.app.repository.OccupiedDataRepository;
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

    public void addData(OccupiedData od){
        dataRepository.save(od);
    }
    public void deleteData(UUID id) {
        dataRepository.deleteById(id);
    }

    public List<OccupiedData> findAll() {
        return dataRepository.findAll();
    }

    public List<OccupiedData> findDataByTime(long time) {
        return dataRepository.findDataByTime(time);
    }

    public List<OccupiedData> findDataByTableNo(int tableNo) {
        return dataRepository.findDataByTableId(tableNo);
    }

    public OccupiedData findDataById(UUID id) {
        return dataRepository.findDataById(id);
    }


}