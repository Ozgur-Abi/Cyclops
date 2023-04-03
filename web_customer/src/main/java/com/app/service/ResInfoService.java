package com.app.service;

import com.app.entity.ResInfo;
import com.app.repository.ResInfoRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class ResInfoService {

    private final ResInfoRepository resInfoRepository;

    public List<ResInfo> getOpenRes(){
        return resInfoRepository.findAllByOpen(true);
    }

}