package com.example.demo.service;

import com.example.demo.entity.Customer;
import com.example.demo.entity.MyUserDetails;
import com.example.demo.entity.OccupiedData;
import com.example.demo.entity.User;
import com.example.demo.repository.CustomerRepository;
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
public class CustomerService {

    private final CustomerRepository customerRepository;

    public void deleteCustomer(UUID id) {
        customerRepository.deleteById(id);
    }

    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    public Customer findDataById(UUID id) {
        return customerRepository.getReferenceById(id);
    }

}