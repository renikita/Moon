package com.development.moon.dev.controller;

import com.development.moon.dev.model.UserResponses;
import com.development.moon.dev.service.UserResponsesService;
import com.development.moon.dev.usercase.exception.UserResponsesValidationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/response")
@CrossOrigin("http://localhost:3000")
public class UserResponsesController {

    @Autowired
    private UserResponsesService userResponsesService;

    @PostMapping("/user")
    UserResponses UR(@RequestBody UserResponses userResponses) {
        return userResponsesService.save(userResponses);
    }

    @GetMapping("/users")
    List<UserResponses> getAllUserResponses(){
        return userResponsesService.findAll();
    }

    @GetMapping("/user/{id}")
    UserResponses getUserResponsesById(@PathVariable Integer id) {
        UserResponses userResponses = userResponsesService.findById(id);
        if (userResponses == null) {
            throw new UserResponsesValidationException("User with id " + id + " not found");
        }
        return userResponses;
    }

    @DeleteMapping("user/{id}")
    String deleteUserResponsesById(@PathVariable Integer id){
        UserResponses userResponses = userResponsesService.findById(id);
        if (userResponses == null){
            throw new UserResponsesValidationException(("User with id " + id + " not found"));
        }
        return userResponsesService.deleteById(id) ? "Success!" : "Deleting not completed.";

    }
}
