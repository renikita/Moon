package com.development.moon.dev.usercase.validation;

import com.development.moon.dev.model.Admin;
import com.development.moon.dev.usercase.exception.AdminValidationException;

import static io.micrometer.common.util.StringUtils.isBlank;

public class AdminValidator {

    public static void validateCreateAdmin(final Admin admin){
        if(admin == null) throw new AdminValidationException("Admin should not be null");
        if (isBlank(admin.getLogin())) throw new AdminValidationException("Login should not be null");
        if (isBlank(admin.getName())) throw new AdminValidationException("Name should not be null");
    }
}
