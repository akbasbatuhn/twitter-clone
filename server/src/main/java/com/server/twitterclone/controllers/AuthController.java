package com.server.twitterclone.controllers;

import com.server.twitterclone.entities.User;
import com.server.twitterclone.request.UserLoginRequest;
import com.server.twitterclone.request.UserRegisterRequest;
import com.server.twitterclone.responses.AuthResponse;
import com.server.twitterclone.security.JwtTokenProvider;
import com.server.twitterclone.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private AuthenticationManager authenticationManager;

    private JwtTokenProvider jwtTokenProvider;

    private UserService userService;

    private PasswordEncoder passwordEncoder;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider,
                          UserService userService, PasswordEncoder passwordEncoder) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody UserLoginRequest loginRequest) {
        UsernamePasswordAuthenticationToken authToken = new
                UsernamePasswordAuthenticationToken(loginRequest.getUserName(), loginRequest.getPassword());
        Authentication auth = authenticationManager.authenticate(authToken);
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwtToken = jwtTokenProvider.generateJwtToken(auth);

        User user = userService.getOneUserByUsername(loginRequest.getUserName());
        AuthResponse authResponse = new AuthResponse();
        authResponse.setMessage("Bearer " + jwtToken);
        authResponse.setUserId(user.getId());

        return authResponse;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody UserRegisterRequest userRegisterRequest) {
        AuthResponse authResponse = new AuthResponse();
        if(userService.getOneUserByEmail(userRegisterRequest.getEmail()) != null) {
            authResponse.setMessage("Username already in use");
            return new ResponseEntity<>(authResponse, HttpStatus.BAD_REQUEST);
        }
        User user = new User();
        user.setEmail(userRegisterRequest.getEmail());
        user.setUserName(userRegisterRequest.getUserName());
        user.setPassword(passwordEncoder.encode(userRegisterRequest.getPassword()));
        userService.createUser(user);

        authResponse.setMessage("User successfully registered");

        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }
}
