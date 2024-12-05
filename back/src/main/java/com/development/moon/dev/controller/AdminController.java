package com.development.moon.dev.controller;

import com.development.moon.dev.model.Admin;
import com.development.moon.dev.service.AdminService;
import com.development.moon.dev.usercase.exception.AdminValidationException;
import com.development.moon.dev.usercase.port.PasswordEncoder;
import com.development.moon.dev.usercase.validation.AdminValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
    @RequestMapping("/adminpage")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class AdminController {

    @Autowired
    AdminService adminService;

    @Autowired
    AdminValidator adminValidator;

    private final PasswordEncoder passwordEncoder;

    public AdminController(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/admin")
    Admin adminSave(@RequestBody Admin admin){
        adminValidator.validateCreateAdmin(admin);
        adminValidator.validateNameTheSameAdmin(admin);
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        return adminService.save(admin);
    }

    @GetMapping("/admins")
    List<Admin> getAllAdmins(){
        return adminService.findAll();
    }

    @GetMapping("/admin/{id}")
    Admin getAdminById(@PathVariable Integer id){
        Admin admin = adminService.findById(id);
        adminValidator.validateCreateAdmin(admin);

        return admin;
    }

    @PutMapping("/admin/{id}")
    Admin updateAdminById(@RequestBody Admin admin, @PathVariable Integer id){
        Admin UpdateAdmin = adminService.findById(id);
        adminValidator.validateCreateAdmin(UpdateAdmin);
        UpdateAdmin.setName(admin.getName());
        UpdateAdmin.setRole(admin.getRole());
        UpdateAdmin.setLogin(admin.getLogin());
        UpdateAdmin.setPassword(passwordEncoder.encode(admin.getPassword()));
        return adminService.save(UpdateAdmin);
    }

    @DeleteMapping("/admin/{id}")
    String deleteAdminById(@PathVariable Integer id){
        Admin admin = adminService.findById(id);
        adminValidator.validateCreateAdmin(admin);
        return adminService.deleteById(id) ? "Success!" : "Deleting not completed.";
    }

}
