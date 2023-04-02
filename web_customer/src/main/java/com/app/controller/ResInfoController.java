package com.app.controller;

import com.app.entity.MyUserDetails;
import com.app.entity.User;
import com.app.service.ResInfoService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/res")
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class ResInfoController {

    private final ResInfoService rInfoService;
    @GetMapping("/asdasd")
    @ResponseBody
    public String asdasd() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        MyUserDetails asd = ((MyUserDetails)authentication.getPrincipal());
        System.out.println(asd.getEmail());
        return "a";
    }

}