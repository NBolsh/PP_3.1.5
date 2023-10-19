package ru.kata.spring.boot_security.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;

@Controller
public class MyViewController {

    private UserService userService;


    @Autowired
    public MyViewController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/adminPage")
    public String getAdminPage(Model model, Principal principal){
        User user =  userService.findUserByEmail(principal.getName()).get();
        model.addAttribute("userP", user);
        model.addAttribute("rolesDB", user.getRoles());
        return "/list";
    }

    @GetMapping("/userPage")
    public String getUserPage(Model model, Principal principal){
        model.addAttribute("userDetails", userService.findUserByEmail(principal.getName()).get());
        return "/user";
    }

}
