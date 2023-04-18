package com.server.twitterclone.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name="user")
@Data
public class User {

    @Id
    Long id;

    String userName;
    String email;
    String password;
}
