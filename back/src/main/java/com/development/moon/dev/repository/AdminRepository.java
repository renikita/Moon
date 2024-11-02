package com.development.moon.dev.repository;

import com.development.moon.dev.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

public interface AdminRepository extends JpaRepository<Admin, Integer> {

    @Query("SELECT sr FROM Admin sr WHERE sr.login = :login")
    Admin findByReg (@Param("login") String login);
}
