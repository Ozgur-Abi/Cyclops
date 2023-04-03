package com.app.controller;

import com.app.entity.MyUserDetails;
import com.app.entity.ResInfo;
import com.app.entity.User;
import com.app.service.ResInfoService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("/res")
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class ResInfoController {

    private final ResInfoService rInfoService;

    @GetMapping("/all")
    public ResponseEntity asdasd() {
        List<ResInfo> resInfos = rInfoService.getOpenRes();



        return new ResponseEntity(resInfos, HttpStatus.OK);
    }

}