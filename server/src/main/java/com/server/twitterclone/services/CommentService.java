package com.server.twitterclone.services;

import com.server.twitterclone.entities.Comment;
import com.server.twitterclone.entities.Tweet;
import com.server.twitterclone.entities.User;
import com.server.twitterclone.repos.CommentRepository;
import com.server.twitterclone.request.CommentCreateRequest;
import com.server.twitterclone.request.CommentUpdateRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CommentService {

    private CommentRepository commentRepository;
    private UserService userService;
    private TweetService tweetService;

    public CommentService(CommentRepository commentRepository, UserService userService, TweetService tweetService) {
        this.commentRepository = commentRepository;
        this.tweetService = tweetService;
        this.userService = userService;
    }

    public List<Comment> getAllComments(Optional<Long> userId, Optional<Long> tweetId) {
        if (userId.isPresent() && tweetId.isPresent()) {
            return commentRepository.findByUserIdAndTweetId(userId.get(), tweetId.get());
        } else if(userId.isPresent()) {
            return commentRepository.findByUserId(userId.get());
        } else if(tweetId.isPresent()) {
            return commentRepository.findByTweetId(tweetId.get());
        }
        return commentRepository.findAll();
    }

    public Comment getOneComment(Long commentId) {
        return commentRepository.findById(commentId).orElse(null);
    }

    public Comment createOneComment(CommentCreateRequest createComment) {
        User user = userService.getOneUser(createComment.getUserId());
        Tweet tweet = tweetService.getOneTweet(createComment.getTweetId());

        if(user != null && tweet != null) {
            Comment newComment = new Comment();
            newComment.setUser(user);
            newComment.setTweet(tweet);
            newComment.setId(createComment.getId());
            newComment.setText(createComment.getText());
            return commentRepository.save(newComment);
        }

        return null;
    }

    public Comment updateOneComment(Long commentId, CommentUpdateRequest updateCommentRequest) {
        Optional<Comment> comment = commentRepository.findById(commentId);
        if(comment.isPresent()) {
            Comment newComment = comment.get();
            newComment.setText(updateCommentRequest.getText());
            return commentRepository.save(newComment);
        }

        return null;
    }

    public void deleteOneComment(Long commentId) {
        commentRepository.deleteById(commentId);
    }
}
