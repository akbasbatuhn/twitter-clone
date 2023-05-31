package com.server.twitterclone.repos;

import com.server.twitterclone.entities.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TweetRepository extends JpaRepository<Tweet, Long> {
    List<Tweet> findByUserId(Long userId);

    List<Tweet> findByParentId(Long parentId);
}
