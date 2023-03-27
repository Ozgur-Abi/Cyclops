package com.app.controller;

import com.app.service.ResInfoService;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/resinfo")
@RequiredArgsConstructor(onConstructor = @__({@Autowired,@NonNull}))
public class ResInfoController {

    private final ResInfoService rInfoService;
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