package com.cmv.project.DTOs;

import lombok.Data;

import java.util.Set;

@Data
public class SignupRequest {
    private String username;
    private String password;
    private String email;
    private Set<String> role;
}
