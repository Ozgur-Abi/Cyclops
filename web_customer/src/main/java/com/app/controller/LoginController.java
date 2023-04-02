package com.app.controller;

import com.app.entity.User;

import com.app.service.UserService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.web.WebAttributes;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.security.sasl.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.sql.Date;
import java.util.List;

@Controller
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class LoginController {
    private final UserService userService;

    @GetMapping("/login-error")
    public String loginErrorPage(HttpServletRequest request, Model model) {
        HttpSession session = request.getSession(false);
        String errorMessage = null;
        if (session != null) {
            errorMessage = "無效的電子郵件或密碼 ! (Incorrect email or password!)";
        }
        model.addAttribute("errorMessage", errorMessage);
        return "login";
    }

    @PostMapping("/login")
    public String login() {
        return "login";
    }

    @PostMapping(value = "/register")
    @ResponseBody
    public String registerUser(@RequestParam String username, @RequestParam String email, @RequestParam String password,
                                Model model) throws Exception {
        List<User> users = userService.findAll();

        for (User user: users)
            if (email.equals(user.getEmail())) {
                //model.addAttribute("errorMessage", "User with this email already exists");
                return "emailExists";
            }

        User user = new User();
        user.setEmail(email);
        user.setPassword(password);
        user.setUsername(username);

        userService.save(user);
        return "success";
    }


}
