package com.server.twitterclone.repos;

import com.server.twitterclone.entities.Like;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LikeRepository extends JpaRepository<Like, Long> {
    List<Like> findByUserIdAndTweetId(Long userId, Long tweetId);

    List<Like> findByUserId(Long userId);

    List<Like> findByTweetId(Long tweetId);
}
