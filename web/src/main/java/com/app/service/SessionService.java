package com.app.service;

import com.app.entity.*;
import com.app.repository.CustomerRepository;
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
public class SessionService {

    private final SessionRepository sessionRepository;

    public void deleteCustomer(UUID id) {
        sessionRepository.deleteById(id);
    }

    public List<Session> findAll() {
        return sessionRepository.findAll();
    }

    /*public Session findDataById(UUID id) {
        return sessionRepository.getReferenceById(id);
    }*/

}