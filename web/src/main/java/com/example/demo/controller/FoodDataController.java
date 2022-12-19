package com.example.demo.controller;

import com.example.demo.service.FoodDataService;
import com.example.demo.service.OccupiedDataService;
import com.example.demo.service.UserService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class FoodDataController {
    private final FoodDataService foodDataService;
}