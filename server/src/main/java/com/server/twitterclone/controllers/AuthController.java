package com.server.twitterclone.controllers;

import com.server.twitterclone.entities.RefreshToken;
import com.server.twitterclone.entities.User;
import com.server.twitterclone.request.RefreshRequest;
import com.server.twitterclone.request.UserCreateRequest;
import com.server.twitterclone.request.UserLoginRequest;
import com.server.twitterclone.request.UserRegisterRequest;
import com.server.twitterclone.responses.AuthResponse;
import com.server.twitterclone.responses.UserResponse;
import com.server.twitterclone.security.JwtTokenProvider;
import com.server.twitterclone.services.RefreshTokenService;
import com.server.twitterclone.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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



    private RefreshTokenService refreshTokenService;

    public AuthController(AuthenticationManager authenticationManager, JwtTokenProvider jwtTokenProvider,
                          UserService userService, RefreshTokenService refreshTokenService) {
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.userService = userService;
        this.refreshTokenService = refreshTokenService;
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
        authResponse.setAccessToken("Bearer " + jwtToken);
        authResponse.setRefreshToken(refreshTokenService.createRefreshToken(user));
        authResponse.setMessage("Successfully logged in");
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

        UserCreateRequest request = new UserCreateRequest();
        request.setEmail(userRegisterRequest.getEmail());
        request.setUserName(userRegisterRequest.getUserName());
        request.setName(userRegisterRequest.getName());
        request.setPassword(userRegisterRequest.getPassword());

        UserResponse response = userService.createUser(request);
        User user = userService.getOneUser(response.getUserId());

        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(
                        userRegisterRequest.getUserName(), userRegisterRequest.getPassword());
        Authentication auth = authenticationManager.authenticate(authToken);
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwtToken = jwtTokenProvider.generateJwtToken(auth);

        authResponse.setMessage("User successfully registered");
        authResponse.setAccessToken("Bearer " + jwtToken);
        authResponse.setRefreshToken(refreshTokenService.createRefreshToken(user));
        authResponse.setUserId(user.getId());

        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

    @PostMapping("/refresh")
    public ResponseEntity<AuthResponse> refresh(@RequestBody RefreshRequest refreshRequest) {
        AuthResponse authResponse = new AuthResponse();
        RefreshToken token = refreshTokenService.getByUser(refreshRequest.getUserId());

        boolean isTokenNotExpired = !refreshTokenService.isRefreshExpired(token);
        boolean isRefreshTokenValid = token.getToken().equals(refreshRequest.getRefreshToken());

        if(isRefreshTokenValid && isTokenNotExpired) {
            User user = token.getUser();
            String jwtToken = jwtTokenProvider.generateJwtTokenByUserName(user.getId());

            authResponse.setMessage("Token successfully refreshed");
            authResponse.setAccessToken("Bearer " + jwtToken);
            authResponse.setRefreshToken(refreshTokenService.createRefreshToken(user));
            authResponse.setUserId(user.getId());
            return new ResponseEntity<>(authResponse, HttpStatus.OK);
        } else {
            authResponse.setMessage("Refresh token is not valid");
            return new ResponseEntity<>(authResponse, HttpStatus.UNAUTHORIZED);
        }
    }
}
