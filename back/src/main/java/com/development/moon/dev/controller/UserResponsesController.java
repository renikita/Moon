package com.development.moon.dev.controller;

import com.development.moon.dev.model.Admin;
import com.development.moon.dev.model.UserResponses;
import com.development.moon.dev.service.UserResponsesService;
import com.development.moon.dev.usercase.exception.UserResponsesValidationException;
import com.development.moon.dev.usercase.validation.UserResValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

/**
 * UserResponsesController is a REST controller that handles HTTP requests for managing UserResponses entities.
 */
@RestController
@RequestMapping("/response")
@CrossOrigin("http://localhost:3000")
public class UserResponsesController {

    @Autowired
    private UserResponsesService userResponsesService;

    @Autowired
    UserResValidator userResValidator;

    /**
     * Saves a new UserResponses entity.
     *
     * @param userResponses the UserResponses entity to save
     * @return the saved UserResponses entity
     */
    @PostMapping("/user")
    UserResponses UR(@RequestBody UserResponses userResponses) {
        userResValidator.validateNameTheSameUserResponses(userResponses);
        userResponses.setResponse_time(new Date());
        return userResponsesService.save(userResponses);
    }

    /**
     * Retrieves all UserResponses entities.
     *
     * @return a list of all UserResponses entities
     */
    @GetMapping("/users")
    List<UserResponses> getAllUserResponses(){
        return userResponsesService.findAll();
    }

    /**
     * Retrieves a UserResponses entity by its ID.
     *
     * @param id the ID of the UserResponses entity to retrieve
     * @return the retrieved UserResponses entity
     * @throws UserResponsesValidationException if the UserResponses entity is not found
     */
    @GetMapping("/user/{id}")
    UserResponses getUserResponsesById(@PathVariable Integer id) {
        UserResponses userResponses = userResponsesService.findById(id);
        if (userResponses == null) {
            throw new UserResponsesValidationException("User with id " + id + " not found");
        }
        return userResponses;
    }

    /**
     * Updates an existing UserResponses entity by its ID.
     *
     * @param userResponses the UserResponses entity with updated information
     * @param id the ID of the UserResponses entity to update
     * @return the updated UserResponses entity
     */
    @PutMapping("/user/{id}")
    UserResponses updateUserById(@RequestBody UserResponses userResponses, @PathVariable Integer id){
        UserResponses UpdateUserResponses = userResponsesService.findById(id);
        userResValidator.validateCheckUserRes(UpdateUserResponses);
        UpdateUserResponses.setName(userResponses.getName());
        UpdateUserResponses.setEmail(userResponses.getEmail());
        UpdateUserResponses.setNumber(userResponses.getNumber());
        UpdateUserResponses.setMessage_res(userResponses.getMessage_res());
        UpdateUserResponses.setResponse_time(userResponses.getResponse_time());
        UpdateUserResponses.setStatus(userResponses.getStatus());
        return userResponsesService.save(UpdateUserResponses);
    }

    /**
     * Deletes a UserResponses entity by its ID.
     *
     * @param id the ID of the UserResponses entity to delete
     * @return a success message if the deletion was successful, otherwise an error message
     * @throws UserResponsesValidationException if the UserResponses entity is not found
     */
    @DeleteMapping("user/{id}")
    String deleteUserResponsesById(@PathVariable Integer id){
        UserResponses userResponses = userResponsesService.findById(id);
        if (userResponses == null){
            throw new UserResponsesValidationException(("User with id " + id + " not found"));
        }
        return userResponsesService.deleteById(id) ? "Deleting not completed." : "Success!";
    }
}