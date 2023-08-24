package com.server.twitterclone.responses;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class AuthResponse {
    Long userId;
    String message;
    String accessToken;
    String refreshToken;
}
