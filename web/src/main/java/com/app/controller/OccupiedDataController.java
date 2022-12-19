package com.app.controller;

import com.app.entity.RestaurantTable;
import com.app.service.OccupiedDataService;
import com.app.service.UserService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tabledata")
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class OccupiedDataController {

    private final OccupiedDataService occupiedDataService;


    @GetMapping(value = "/test", produces = "application/json")
    public ResponseEntity testData(){
        RestaurantTable asd = new RestaurantTable();
        asd.setTableNo(11);
        return new ResponseEntity(asd, HttpStatus.OK);
    }
}