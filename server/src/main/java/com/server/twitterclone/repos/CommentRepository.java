package com.server.twitterclone.repos;

import com.server.twitterclone.entities.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment, Long> {
    List<Comment> findByUserIdAndTweetId(Long userId, Long tweetId);

    List<Comment> findByUserId(Long userId);

    List<Comment> findByTweetId(Long tweetId);
}
