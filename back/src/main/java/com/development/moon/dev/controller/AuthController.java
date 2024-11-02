package com.development.moon.dev.controller;

import com.development.moon.dev.model.Admin;
import com.development.moon.dev.model.LoginRequest;
import com.development.moon.dev.service.AdminService;
import com.development.moon.dev.usercase.port.PasswordEncoder;
import com.development.moon.dev.usercase.validation.AdminValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:3000")
public class AuthController {

    @Autowired
    private AdminService adminService;

    @Autowired
    AdminValidator adminValidator;


    @PostMapping("/reg")
    public String Login(@RequestBody LoginRequest loginRequest){

        Admin checkAdmin = adminService.findByReg(loginRequest.getLogin());
        adminValidator.validatePasswordAdmin(checkAdmin, loginRequest.getPassword());
        return "Successful registration";
    }



}
