package com.app.controller;

import com.app.entity.Customer;
import com.app.entity.FoodOrder;
import com.app.entity.OccupiedData;
import com.app.repository.CustomerRepository;
import com.app.repository.OrderRepository;
import com.app.service.CustomerService;
import com.app.service.OrderService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Random;

@Controller
@RequestMapping("/order")
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class OrderController {
    private final OrderService orderService;
    private final OrderRepository orderRepository;
    private final CustomerRepository customerRepository;

    @GetMapping("/getById")
    public ResponseEntity getOrderById(@RequestParam("orderId") int orderId) {
        FoodOrder order = orderService.findDataById(orderId);
        return new ResponseEntity(order, HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity getAllOrders() {
        List<FoodOrder> orders = orderService.findAll();
        return new ResponseEntity(orders, HttpStatus.OK);
    }

    @PostMapping(value = "/createRandom", produces = "application/json")
    public ResponseEntity createRandomData(){
        int tableCount = 5;

        for(int i = 0; i < 24; i++){
            Random rand = new Random();
            int count = rand.nextInt(5);
            FoodOrder rOrder = new FoodOrder();
            rOrder.setCustomer(customerRepository.getById(1));
            rOrder.setTableId(count + 1);
            rOrder.setOrderText("kürt böreği");
            orderRepository.save(rOrder);
        }

        return new ResponseEntity("success", HttpStatus.OK);
    }
}