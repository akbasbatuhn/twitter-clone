package com.server.twitterclone.request;

import lombok.Data;

@Data
public class RefreshRequest {
    Long userId;
    String refreshToken;
}
