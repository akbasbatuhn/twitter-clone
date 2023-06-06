package com.server.twitterclone.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Date;

@Entity
@Table(name="user")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String userName;
    String name;
    String email;
    String password;
    String bio;

    @Column(name = "profile_image_id")
    private String profileImageId;

    @Temporal(TemporalType.TIMESTAMP)
    Date createdAt;
}
