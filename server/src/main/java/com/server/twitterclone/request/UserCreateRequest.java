package com.server.twitterclone.request;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserCreateRequest {
    Long id;
    String userName;
    String name;
    String email;
    String password;
}
