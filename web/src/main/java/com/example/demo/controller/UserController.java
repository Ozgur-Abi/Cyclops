package com.example.demo.controller;

import com.example.demo.entity.User;
import com.example.demo.service.UserService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.UUID;

@Controller
@RequestMapping("/users")
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class UserController {

    private final UserService userService;
  /*  @GetMapping()
    public String getUsers(Model model) {
    }

    @GetMapping("/user-profile")
    public String goUserProfilePage(Model model) {
    }

    @PutMapping()
    public String updateUser(@RequestBody User user) throws Exception {

    }

    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable UUID id, Model model) {
    }

    @RequestMapping(value = "/create-form", method = RequestMethod.GET, produces = MediaType.TEXT_HTML_VALUE)
    public String createForm(Model model) {

    }

    @GetMapping("/edit-profile-page")
    public String editForm( Model model) {

    }

    @RequestMapping(value = "/{id}/attendances", method = RequestMethod.GET, produces = MediaType.TEXT_HTML_VALUE)
    public String userAttendancesPage(@PathVariable("id") UUID id, RedirectAttributes redirectAttributes) {

    }*/
}