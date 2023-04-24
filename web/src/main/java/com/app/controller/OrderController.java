package com.app.controller;

import com.app.entity.Customer;
import com.app.entity.FoodOrder;
import com.app.service.CustomerService;
import com.app.service.OrderService;
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
@RequestMapping("/order")
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class OrderController {
    private final OrderService orderService;

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
}