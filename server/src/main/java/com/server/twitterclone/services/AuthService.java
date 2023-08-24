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
        checkUserExists(registerRequest.getEmail());

        UserCreateRequest request = createUserCreateRequest(registerRequest);

        UserResponse response = userService.createUser(request);
        User user = userService.getOneUser(response.getUserId());

        UsernamePasswordAuthenticationToken authToken =
                getAuthToken(registerRequest.getUserName(), registerRequest.getPassword());

        String jwtToken = getJwtToken(authToken);

        AuthResponse authResponse = createAuthResponse(
                user,
                "User successfully registered",
                jwtToken);
        return new ResponseEntity<>(authResponse, HttpStatus.CREATED);
    }

    public ResponseEntity<AuthResponse> userLogin(UserLoginRequest loginRequest) {
        UsernamePasswordAuthenticationToken authToken =
                getAuthToken(loginRequest.getUserName(), loginRequest.getPassword());

        String jwtToken = getJwtToken(authToken);

        User user = userService.getOneUserByUsername(loginRequest.getUserName());

        AuthResponse authResponse = createAuthResponse(
                user,
                "Successfully logged in",
                jwtToken);
        return new ResponseEntity<>(authResponse, HttpStatus.ACCEPTED);
    }

    public ResponseEntity<AuthResponse> refreshJwtToken(RefreshRequest refreshRequest) {
        RefreshToken token = refreshTokenService.getByUser(refreshRequest.getUserId());

        boolean isTokenExpired = refreshTokenService.isRefreshExpired(token);
        boolean isRefreshTokenValid = token.getToken().equals(refreshRequest.getRefreshToken());

        if(isRefreshTokenValid && !isTokenExpired) {
            User user = token.getUser();
            String jwtToken = jwtTokenProvider.generateJwtTokenByUserName(user.getId());

            AuthResponse authResponse = createAuthResponse(
                    user,
                    "Token successfully refreshed",
                    jwtToken);
            return new ResponseEntity<>(authResponse, HttpStatus.OK);
        } else {
            AuthResponse authResponse = createAuthResponse("Refresh token is not valid");
            return new ResponseEntity<>(authResponse, HttpStatus.UNAUTHORIZED);
        }
    }

    private UsernamePasswordAuthenticationToken getAuthToken(String username,
                                                             String password) {
        return new UsernamePasswordAuthenticationToken(
                        username, password);
    }

    private AuthResponse createAuthResponse(String message) {
        return AuthResponse.builder()
                .message(message)
                .build();
    }

    private AuthResponse createAuthResponse(User user,
                                            String message,
                                            String jwtToken) {
        return AuthResponse.builder()
                .userId(user.getId())
                .message(message)
                .accessToken("Bearer " + jwtToken)
                .refreshToken(refreshTokenService.createRefreshToken(user))
                .build();
    }

    private UserCreateRequest createUserCreateRequest(UserRegisterRequest registerRequest) {
        return UserCreateRequest.builder()
                .userName(registerRequest.getUserName())
                .email(registerRequest.getEmail())
                .password(registerRequest.getPassword())
                .name(registerRequest.getName())
                .build();
    }

    private void checkUserExists(String email) {
        userService.checkUserAlreadyExists(email);
    }

    private String getJwtToken(UsernamePasswordAuthenticationToken token) {
        Authentication auth = authenticationManager.authenticate(token);
        SecurityContextHolder.getContext().setAuthentication(auth);
        return jwtTokenProvider.generateJwtToken(auth);
    }
}
