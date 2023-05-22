package com.app.controller;

import com.app.entity.OccupiedData;
import com.app.entity.RestaurantTable;
import com.app.service.OccupiedDataService;
import com.app.service.UserService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Random;

@RestController
@RequestMapping("/tabledata")
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class OccupiedDataController {

    private final OccupiedDataService occupiedDataService;
    @GetMapping(value = "/totalnow", produces = "application/json")
    public ResponseEntity totalCurrent(){
        OccupiedData totalD = occupiedDataService.findDataById(-1);
        return new ResponseEntity(totalD, HttpStatus.OK);
    }

    @GetMapping(value = "/test", produces = "application/json")
    public ResponseEntity testData(){
        RestaurantTable asd = new RestaurantTable();
        asd.setTableNo(11);
        return new ResponseEntity(asd, HttpStatus.OK);
    }

    @GetMapping(value = "/getallcurrent", produces = "application/json")
    public ResponseEntity getAllCurrentData(){
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
        LocalDateTime now = LocalDateTime.now();
        LocalDateTime finalTime = LocalDateTime.of(now.getYear(), now.getMonth(), now.getDayOfMonth(), now.getHour(), 0);
        long timeLong = Long.parseLong(dtf.format(finalTime));
        List<OccupiedData> datas = occupiedDataService.findDataByTime(timeLong);
        return new ResponseEntity(datas, HttpStatus.OK);
    }

    @GetMapping(value = "/gettoday", produces = "application/json")
    public ResponseEntity getTodaysData(){
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
        LocalDateTime now = LocalDateTime.now();
        List<OccupiedData> datas = new ArrayList<OccupiedData>();
        for(int i = 0; i < 24; i++){
            LocalDateTime finalTime = LocalDateTime.of(now.getYear(), now.getMonth(), now.getDayOfMonth(), i, 0);
            long timeLong = Long.parseLong(dtf.format(finalTime));
            datas.addAll(occupiedDataService.findDataByTime(timeLong));
        }

        return new ResponseEntity(datas, HttpStatus.OK);
    }

    @GetMapping(value = "/gettodaycount", produces = "application/json")
    public ResponseEntity getTodayCountData(){
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
        LocalDateTime now = LocalDateTime.now();
        List<Integer> counts = new ArrayList<Integer>();
        Random rand = new Random();
        int randInt = rand.nextInt(10);
        System.out.println(randInt);

        for(int i = 0; i < 24; i++){
            int hourCount = 0;
            LocalDateTime finalTime = LocalDateTime.of(now.getYear(), now.getMonth(), now.getDayOfMonth(), i, 0);
            long timeLong = Long.parseLong(dtf.format(finalTime));
            for(OccupiedData od: occupiedDataService.findDataByTime(timeLong)){
                hourCount += od.getCustomerCount();
            }
            counts.add(hourCount);
        }

        return new ResponseEntity(counts, HttpStatus.OK);
    }

    @PostMapping(value = "/create", produces = "application/json")
    public ResponseEntity createData(@RequestParam("tableId") int tableId, @RequestParam("customerCount") int customerCount){
        OccupiedData data = new OccupiedData();
        data.setTableId(tableId);
        data.setCustomerCount(customerCount);
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
        LocalDateTime now = LocalDateTime.now();

        System.out.println(dtf.format(now));

        data.setTime(Long.parseLong(dtf.format(now)));
        occupiedDataService.addData(data);

        return new ResponseEntity(data, HttpStatus.OK);
    }

    @PostMapping(value = "/createRandom", produces = "application/json")
    public ResponseEntity createRandomData(){
        int tableCount = 5;

        for(int i = 0; i < 24; i++){
            for (int j = 0; j < tableCount; j++){
                Random rand = new Random();
                int count = rand.nextInt(5);

                DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyyMMddHHmm");
                LocalDateTime now = LocalDateTime.now();
                LocalDateTime finalTime = LocalDateTime.of(now.getYear(), now.getMonth(), now.getDayOfMonth(), i, 0);
                OccupiedData data = new OccupiedData();
                data.setTableId(j);
                data.setCustomerCount(count);
                data.setTime(Long.parseLong(dtf.format(finalTime)));
                occupiedDataService.addData(data);
            }
        }

        return new ResponseEntity("success", HttpStatus.OK);
    }
}