package ru.kata.spring.boot_security.demo.controller;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import ru.kata.spring.boot_security.demo.model.User;
import ru.kata.spring.boot_security.demo.service.RoleService;
import ru.kata.spring.boot_security.demo.service.UserService;

import java.security.Principal;

@Controller
public class AdminController {
    private UserService userService;
    private RoleService roleService;


    @Autowired
    public AdminController(UserService userService, RoleService roleService){
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping( "/admin")
    public String showAllUsers(Model model,
                               Principal principal) {
        model.addAttribute("rolesDB", roleService.showRoles());
        model.addAttribute("userNew", new User());
        model.addAttribute("userP", userService.findUserByEmail(principal.getName()).get());
        model.addAttribute("allUsers", userService.getAllUsers());
        return "/list";
    }


    @PostMapping("/saveUser")
    public String addUser(@ModelAttribute("userNew") User user,
                          BindingResult bindingResult){
        if (bindingResult.hasErrors()) { return "/list"; }
        userService.addUser(user);
        return "redirect:/admin";
    }

    @GetMapping("/{id}")
    public String getUser(Model model, @PathVariable("id") Long id){
        model.addAttribute("user", userService.findUserById(id));
        model.addAttribute("rolesDB", roleService.showRoles());
        return "redirect:/admin";
    }

    @PatchMapping("/{id}")
    public String editUser(@PathVariable("id") Long id,
                           @ModelAttribute("user") User user) {
        userService.addUser(user);
        return "redirect:/admin";
    }


    @DeleteMapping("/{id}")
    public String deleteUser(@PathVariable("id") Long id) {
        userService.deleteUser(id);
        return "redirect:/admin";
    }

}
