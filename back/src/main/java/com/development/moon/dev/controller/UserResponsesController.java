package com.development.moon.dev.controller;

import com.development.moon.dev.model.Admin;
import com.development.moon.dev.model.UserResponses;
import com.development.moon.dev.service.UserResponsesService;
import com.development.moon.dev.usercase.exception.UserResponsesValidationException;
import com.development.moon.dev.usercase.validation.UserResValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/response")
@CrossOrigin("http://localhost:3000")
public class UserResponsesController {

    @Autowired
    private UserResponsesService userResponsesService;

    @Autowired
    UserResValidator userResValidator;

    @PostMapping("/user")
    UserResponses UR(@RequestBody UserResponses userResponses) {
        userResValidator.validateNameTheSameUserResponses(userResponses);
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

    @PutMapping("/user/{id}")
    UserResponses updateUserById(@RequestBody UserResponses userResponses, @PathVariable Integer id){
        UserResponses UpdateUserResponses = userResponsesService.findById(id);
        userResValidator.validateCheckUserRes(UpdateUserResponses);
        UpdateUserResponses.setName(userResponses.getName());
        UpdateUserResponses.setEmail(userResponses.getEmail());
        UpdateUserResponses.setNumber(userResponses.getNumber());
        UpdateUserResponses.setMessage_res(userResponses.getMessage_res());
        UpdateUserResponses.setResponse_time(userResponses.getResponse_time());
        return userResponsesService.save(UpdateUserResponses);
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
