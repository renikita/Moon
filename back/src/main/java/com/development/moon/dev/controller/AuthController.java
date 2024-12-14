package com.development.moon.dev.controller;

import com.development.moon.dev.model.Admin;
import com.development.moon.dev.model.dto.LoginRequest;
import com.development.moon.dev.service.AdminService;
import com.development.moon.dev.usercase.validation.AdminValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * AuthController is a REST controller that handles HTTP requests for authentication.
 */
@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AuthController {

    @Autowired
    private AdminService adminService;

    @Autowired
    AdminValidator adminValidator;

    /**
     * Handles the login request.
     *
     * @param loginRequest the login request containing login and password
     * @return a success message if the login is successful
     */
    @PostMapping("/login")
    public String Login(@RequestBody LoginRequest loginRequest) {
        Admin checkAdmin = adminService.findByReg(loginRequest.getLogin());
        adminValidator.validatePasswordAdmin(checkAdmin, loginRequest.getPassword());
        return "Successful registration";
    }
}