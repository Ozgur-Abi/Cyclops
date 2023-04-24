package com.app.service;
import com.app.entity.Customer;
import com.app.entity.MyUserDetails;
import com.app.entity.OccupiedData;
import com.app.entity.User;
import com.app.repository.CustomerRepository;
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
public class CustomerService {

    private final CustomerRepository customerRepository;

    public void deleteCustomer(int id) {
        customerRepository.deleteById(id);
    }

    public List<Customer> findAll() {
        return customerRepository.findAll();
    }

    public Customer findDataById(int id) {
        return customerRepository.getById(id);
    }

}