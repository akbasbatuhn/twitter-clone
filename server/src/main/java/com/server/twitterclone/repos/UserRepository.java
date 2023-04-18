package com.server.twitterclone.repos;

import com.server.twitterclone.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
