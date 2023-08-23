package com.server.twitterclone.controllers;

import com.server.twitterclone.request.RefreshRequest;
import com.server.twitterclone.request.UserLoginRequest;
import com.server.twitterclone.request.UserRegisterRequest;
import com.server.twitterclone.responses.AuthResponse;
import com.server.twitterclone.services.AuthService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/auth")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody UserLoginRequest loginRequest) {
        return authService.userLogin(loginRequest);
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody UserRegisterRequest userRegisterRequest) {
        return authService.createUser(userRegisterRequest);
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@RequestBody RefreshRequest refreshRequest) {
        return authService.refreshJwtToken(refreshRequest);
    }
}
