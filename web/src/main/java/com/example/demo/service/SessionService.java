package com.example.demo.service;

import com.example.demo.entity.*;
import com.example.demo.repository.CustomerRepository;
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
public class SessionService {

    private final SessionRepository sessionRepository;

    public void deleteCustomer(UUID id) {
        sessionRepository.deleteById(id);
    }

    public List<Session> findAll() {
        return sessionRepository.findAll();
    }

    public Session findDataById(UUID id) {
        return sessionRepository.getReferenceById(id);
    }

}