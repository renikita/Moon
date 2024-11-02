package com.development.moon.dev.usercase.validation;

import com.development.moon.dev.model.Admin;

import com.development.moon.dev.service.AdminService;
import com.development.moon.dev.usercase.exception.AdminValidationException;
import com.development.moon.dev.usercase.exception.UserResponsesValidationException;
import com.development.moon.dev.usercase.port.PasswordEncoder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import static io.micrometer.common.util.StringUtils.isBlank;
@Component
public class AdminValidator {

    @Autowired
    AdminService adminService;

    private final PasswordEncoder passwordEncoder;

    public AdminValidator(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }


    public void validateCreateAdmin(final Admin admin){
        if(admin == null) throw new AdminValidationException("Admin should not be null");
        if (isBlank(admin.getLogin())) throw new AdminValidationException("Login should not be null");
        if (isBlank(admin.getName())) throw new AdminValidationException("Name should not be null");
    }

    public void validatePasswordAdmin(final Admin admin, final String password){
        if (!passwordEncoder.matches(password, admin.getPassword())) throw new AdminValidationException("Incorrect password");


    }

    public void validateNameTheSameAdmin(final Admin admin){
        if( adminService.findAll().stream().anyMatch(x ->
                admin.getLogin().equals(x.getLogin()))
        )
            throw new UserResponsesValidationException("This name is used.");
    }

}
