package com.app.controller;

import com.app.entity.Customer;
import com.app.entity.FoodOrder;
import com.app.entity.OccupiedData;
import com.app.entity.User;
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
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping(value = "/addorder")
    @ResponseBody
    public String addOrder(@RequestParam int cid, @RequestParam int tid, @RequestParam String order,
                               Model model) throws Exception {

        FoodOrder newOrder = new FoodOrder();
        newOrder.setOrderText(order);
        newOrder.setCustomer(customerRepository.getById(cid));
        newOrder.setTableId(tid);
        newOrder.setDelivered(false);

        orderRepository.save(newOrder);
        return "success";
    }

    @PostMapping(value = "/deliverorder")
    @ResponseBody
    public String deliverOrder(@RequestParam int oid,
                           Model model) throws Exception {

        FoodOrder order = orderService.findDataById(oid);

        order.setDelivered(true);
        orderRepository.save(order);
        return "success";
    }


}