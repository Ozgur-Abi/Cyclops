package com.app.controller;

import com.app.entity.Customer;
import com.app.entity.FoodOrder;
import com.app.repository.CustomerRepository;
import com.app.service.CustomerService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/customer")
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class CustomerController {
    private final CustomerService customerService;
    private final CustomerRepository customerRepository;

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

    @PostMapping(value = "/editcustomer")
    @ResponseBody
    public String addCustomer(@RequestParam int cid, @RequestParam int age, @RequestParam String sex,
                              @RequestParam String name, @RequestParam String surname,
                           Model model) throws Exception {

        Customer cus = customerService.findDataById(cid);
        cus.setAge(age);
        cus.setSex(sex);
        cus.setName(name);
        cus.setSurname(surname);

        customerRepository.save(cus);
        return "success";
    }
}