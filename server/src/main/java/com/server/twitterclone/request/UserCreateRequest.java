package com.server.twitterclone.request;

import lombok.Data;

@Data
public class UserCreateRequest {

    Long id;
    String userName;
    String name;
    String email;
    String password;
}
