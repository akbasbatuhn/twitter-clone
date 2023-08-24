package com.server.twitterclone.request;

import lombok.Data;

@Data
public class UserLoginRequest {
    String userName;
    String password;
}
