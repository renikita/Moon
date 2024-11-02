package com.development.moon.dev.controller;

import com.development.moon.dev.model.Admin;
import com.development.moon.dev.service.AdminService;
import com.development.moon.dev.usercase.exception.AdminValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/adminpage")
@CrossOrigin("http://localhost:3000")
public class AdminController {

    @Autowired
    AdminService adminService;

    @PostMapping("/admin")
    Admin adminSave(@RequestBody Admin admin){
        return adminService.save(admin);
    }

    @GetMapping("/admins")
    List<Admin> getAllAdmins(){
        return adminService.findAll();
    }

    @GetMapping("/admin/{id}")
    Admin getAdminById(@PathVariable Integer id){
        Admin admin = adminService.findById(id);
        if(admin == null){
            throw new AdminValidationException("Admin with id " + id + " not found.");
        }

        return admin;
    }

    @PutMapping("/admin/{id}")
    Admin updateAdminById(@RequestBody Admin admin, @PathVariable Integer id){
        Admin UpdateAdmin = adminService.findById(id);
        if(UpdateAdmin == null){
            throw new AdminValidationException("Admin with id " + id + " not found.");
        }
        UpdateAdmin.setName(admin.getName());
        UpdateAdmin.setRole(admin.getRole());
        UpdateAdmin.setLogin(admin.getLogin());
        UpdateAdmin.setPassword(admin.getPassword());
        return adminService.save(UpdateAdmin);
    }

    @DeleteMapping("/admin/{id}")
    String deleteAdminById(@PathVariable Integer id){
        Admin admin = adminService.findById(id);
        if(admin == null){
            throw new AdminValidationException("Admin with id " + id + " not found.");
        }
        return adminService.deleteById(id) ? "Success!" : "Deleting not completed.";
    }

}
