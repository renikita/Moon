package com.development.moon.dev.usercase.validation;

import com.development.moon.dev.model.UserResponses;
import com.development.moon.dev.service.UserResponsesService;
import com.development.moon.dev.usercase.exception.UserResponsesValidationException;
import com.development.moon.dev.usercase.port.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

import static io.micrometer.common.util.StringUtils.isBlank;

@Component
public class UserResValidator {

    private final PasswordEncoder passwordEncoder;


    @Autowired
    UserResponsesService userResponsesService;

    public UserResValidator(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    public void validateCheckUserRes(final UserResponses userResponses){
        if(userResponses == null) throw new UserResponsesValidationException("User Responses should not be null");
        if (isBlank(userResponses.getEmail())) throw new UserResponsesValidationException("Email should not be null");
        if (isBlank(userResponses.getName())) throw new UserResponsesValidationException("Name should not be null");
        if (isBlank(userResponses.getNumber())) throw new UserResponsesValidationException("Number should not be null");
        if (isBlank(userResponses.getMessage_res())) throw new UserResponsesValidationException("Message should not be null");
    }

    public void validateNameTheSameUserResponses(final UserResponses userResponses){
       if( userResponsesService.findAll().stream().anyMatch(x ->
                userResponses.getName().equals(x.getName()))
       )
           throw new UserResponsesValidationException("This name is used.");
    }
}
