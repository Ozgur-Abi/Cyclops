package com.example.demo.controller;

import com.example.demo.service.CustomerService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class CustomerController {
    private final CustomerService customerService;
}