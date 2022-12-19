package com.example.demo.service;

import com.example.demo.entity.*;
import com.example.demo.repository.CustomerRepository;
import com.example.demo.repository.FoodDataRepository;
import com.example.demo.repository.OccupiedDataRepository;
import com.example.demo.repository.SessionRepository;
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
public class FoodDataService {

    private final FoodDataRepository foodDataRepository;

    public void deleteCustomer(UUID id) {
        foodDataRepository.deleteById(id);
    }

    public List<FoodData> findAll() {
        return foodDataRepository.findAll();
    }

    public FoodData findDataById(UUID id) {
        return foodDataRepository.getReferenceById(id);
    }

}