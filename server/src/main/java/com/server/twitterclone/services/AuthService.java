package com.server.twitterclone.services;

import com.server.twitterclone.entities.RefreshToken;
import com.server.twitterclone.entities.User;
import com.server.twitterclone.request.RefreshRequest;
import com.server.twitterclone.request.UserCreateRequest;
import com.server.twitterclone.request.UserLoginRequest;
import com.server.twitterclone.request.UserRegisterRequest;
import com.server.twitterclone.responses.AuthResponse;
import com.server.twitterclone.responses.UserResponse;
import com.server.twitterclone.security.JwtTokenProvider;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    private final UserService userService;
    private final AuthenticationManager authenticationManager;
    private final JwtTokenProvider jwtTokenProvider;
    private final RefreshTokenService refreshTokenService;

    public AuthService(UserService userService,
                       AuthenticationManager authenticationManager,
                       JwtTokenProvider jwtTokenProvider,
                       RefreshTokenService refreshTokenService) {
        this.userService = userService;
        this.authenticationManager = authenticationManager;
        this.jwtTokenProvider = jwtTokenProvider;
        this.refreshTokenService = refreshTokenService;
    }

    public ResponseEntity<AuthResponse> createUser(UserRegisterRequest registerRequest) {
        AuthResponse authResponse = new AuthResponse();
        if(userService.getOneUserByEmail(registerRequest.getEmail()) != null) {
            authResponse.setMessage("Username already in use");
            return new ResponseEntity<>(authResponse, HttpStatus.BAD_REQUEST);
        }

        UserCreateRequest request = new UserCreateRequest();
        request.setEmail(registerRequest.getEmail());
        request.setUserName(registerRequest.getUserName());
        request.setName(registerRequest.getName());
        request.setPassword(registerRequest.getPassword());

        UserResponse response = userService.createUser(request);
        User user = userService.getOneUser(response.getUserId());

        UsernamePasswordAuthenticationToken authToken =
                new UsernamePasswordAuthenticationToken(
                        registerRequest.getUserName(), registerRequest.getPassword());
        Authentication auth = authenticationManager.authenticate(authToken);
        SecurityContextHolder.getContext().setAuthentication(auth);
        String jwtToken = jwtTokenProvider.generateJwtToken(auth);

        authResponse.setMessage("User successfully registered");
        authResponse.setAccessToken("Bearer " + jwtToken);
        authResponse.setRefreshToken(refreshTokenService.createRefreshToken(user));
        authResponse.setUserId(user.getId());

        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

    public AuthResponse userLogin(UserLoginRequest loginRequest) {
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

    public ResponseEntity<AuthResponse> refreshJwtToken(RefreshRequest refreshRequest) {
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
