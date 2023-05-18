package com.server.twitterclone.responses;

import com.server.twitterclone.entities.User;
import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.Data;

import java.util.Date;

@Data
public class UserResponse {
    Long userId;
    String userName;
    String name;

    @Lob
    @Column(columnDefinition = "text")
    String bio;

    Date createdAt;

    // TODO: Add user profile picture
    // TODO: Add user created date
    // TODO: Add user banner picture
    // TODO: Add user follower and following accounts
    // TODO: Add user location and website
    // TODO: Add user birthday

    public UserResponse(User entity) {
        this.userId = entity.getId();
        this.userName = entity.getUserName();
        this.name = entity.getName();
        this.bio = entity.getBio();
        this.createdAt = entity.getCreatedAt();
    }
}
