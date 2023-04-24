package com.app.service;

import com.app.entity.FoodOrder;
import com.app.repository.OrderRepository;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class OrderService {

    private final OrderRepository orderRepository;

    public void deleteCustomer(int id) {
        orderRepository.deleteById(id);
    }

    public List<FoodOrder> findAll() {
        return orderRepository.findAll();
    }

    public FoodOrder findDataById(int id) {
        return orderRepository.getById(id);
    }

}