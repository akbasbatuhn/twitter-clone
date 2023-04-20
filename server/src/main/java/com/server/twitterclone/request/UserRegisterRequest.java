package com.server.twitterclone.request;

import lombok.Data;

@Data
public class UserRegisterRequest {

    String email;
    String userName;
    String password;
}
