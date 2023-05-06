package com.server.twitterclone.responses;

import lombok.Data;

@Data
public class AuthResponse {
    Long userId;
    String message;
    String accessToken;
    String refreshToken;
}
