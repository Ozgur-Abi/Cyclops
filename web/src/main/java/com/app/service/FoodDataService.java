package com.app.service;

import com.app.entity.*;
import com.app.repository.CustomerRepository;
import com.app.repository.FoodDataRepository;
import com.app.repository.OccupiedDataRepository;
import com.app.repository.SessionRepository;
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

    /*public FoodData findDataById(UUID id) {
        return foodDataRepository.getReferenceById(id);
    }*/

}