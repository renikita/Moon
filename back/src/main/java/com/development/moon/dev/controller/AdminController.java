package com.development.moon.dev.controller;

import com.development.moon.dev.model.Admin;
import com.development.moon.dev.service.AdminService;
import com.development.moon.dev.usercase.EventLogdb;
import com.development.moon.dev.usercase.exception.AdminValidationException;
import com.development.moon.dev.usercase.port.PasswordEncoder;
import com.development.moon.dev.usercase.validation.AdminValidator;
import com.development.moon.dev.util.JSONutil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.w3c.dom.html.HTMLHtmlElement;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

/**
 * AdminController is a REST controller that handles HTTP requests for managing Admin entities.
 */
@RestController
@RequestMapping("/adminpage")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"}, allowCredentials = "true")
public class AdminController {

    @Autowired
    AdminService adminService;

    @Autowired
    AdminValidator adminValidator;
    @Autowired
    private EventLogdb eventLogdb;
    @Autowired
    JSONutil jsonutil;
    private final PasswordEncoder passwordEncoder;

    /**
     * Constructor for AdminController.
     *
     * @param passwordEncoder the PasswordEncoder to use for encoding passwords
     */
    public AdminController(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    /**
     * Saves a new Admin entity.
     *
     * @param admin the Admin entity to save
     * @return the saved Admin entity
     */
    @PostMapping("/admin")
    Admin adminSave(@RequestBody Admin admin, HttpServletRequest request){
        HttpSession session = request.getSession(false);
        Admin whoAdmin = adminService.findById(Integer.valueOf((String) session.getAttribute("userId")));

        adminValidator.validateCreateAdmin(admin);
        adminValidator.validateNameTheSameAdmin(admin);
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));

        Map<String, String> eventDetails = new LinkedHashMap<>();
        eventDetails.put("User-Agent", request.getHeader("User-Agent"));
        eventDetails.put("RemoteAddr", request.getRemoteAddr());
        eventDetails.put("Device", request.getHeader("User-Agent").contains("Mobi") ? "Mobile" : "Desktop");
        eventDetails.put("Created by", whoAdmin.getName());
        eventDetails.put("Create ->", admin.getName());


        eventLogdb.logEvent(String.valueOf(whoAdmin.getId()), whoAdmin.getName(), "created admin", jsonutil.toJSON(eventDetails));

        return adminService.save(admin);
    }

    /**
     * Retrieves all Admin entities.
     *
     * @return a list of all Admin entities
     */
    @GetMapping("/admins")
    List<Admin> getAllAdmins(){
        return adminService.findAll();
    }

    /**
     * Retrieves an Admin entity by its ID.
     *
     * @param id the ID of the Admin entity to retrieve
     * @return the retrieved Admin entity
     */
    @GetMapping("/admin/{id}")
    Admin getAdminById(@PathVariable Integer id){
        Admin admin = adminService.findById(id);
        adminValidator.validateCreateAdmin(admin);
        return admin;
    }

    /**
     * Updates an existing Admin entity by its ID.
     *
     * @param admin the Admin entity with updated information
     * @param id the ID of the Admin entity to update
     * @return the updated Admin entity
     */
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

    /**
     * Deletes an Admin entity by its ID.
     *
     * @param id the ID of the Admin entity to delete
     * @return a success message if the deletion was successful, otherwise an error message
     */
    @DeleteMapping("/admin/{id}")
    String deleteAdminById(@PathVariable Integer id, HttpServletRequest request){
        HttpSession session = request.getSession(false);
        Admin admin = adminService.findById(id);
        Admin whoAdmin = adminService.findById(Integer.valueOf((String) session.getAttribute("userId")));
        adminValidator.validateCreateAdmin(admin);

        Map<String, String> eventDetails = new LinkedHashMap<>();
        eventDetails.put("User-Agent", request.getHeader("User-Agent"));
        eventDetails.put("RemoteAddr", request.getRemoteAddr());
        eventDetails.put("Device", request.getHeader("User-Agent").contains("Mobi") ? "Mobile" : "Desktop");
        eventDetails.put("Deleted by", whoAdmin.getName());
        eventDetails.put("Deleted ->", admin.getName());

        eventLogdb.logEvent(String.valueOf(whoAdmin.getId()), whoAdmin.getName(), "delete admin", jsonutil.toJSON(eventDetails));

        return adminService.deleteById(id) ? "Success!" : "Deleting not completed.";
    }
}