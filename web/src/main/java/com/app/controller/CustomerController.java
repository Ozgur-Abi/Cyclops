package com.app.controller;

import com.app.entity.Customer;
import com.app.service.CustomerService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;

@Controller
@RequestMapping("/customer")
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class CustomerController {
    private final CustomerService customerService;

    @GetMapping("/getById")
    public ResponseEntity getCustomerById(@RequestParam("customerId") int customerId) {
        Customer resInfos = customerService.findDataById(customerId);
        return new ResponseEntity(resInfos, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity getAllCustomers() {
        List<Customer> resInfos = customerService.findAll();
        return new ResponseEntity(resInfos, HttpStatus.OK);
    }
}