package com.server.twitterclone.controllers;

import com.server.twitterclone.entities.Comment;
import com.server.twitterclone.request.CommentCreateRequest;
import com.server.twitterclone.request.CommentUpdateRequest;
import com.server.twitterclone.services.CommentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/comments")
public class CommentController {

    private CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public List<Comment> getAllComments(@RequestParam Optional<Long> userId, @RequestParam Optional<Long> tweetId) {
        return commentService.getAllComments(userId, tweetId);
    }

    @PostMapping
    public Comment createOneComment(@RequestBody CommentCreateRequest createComment) {
        return commentService.createOneComment(createComment);
    }

    @GetMapping("/{commentId}")
    public Comment getOneComment(@PathVariable Long commentId) {
        return commentService.getOneComment(commentId);
    }

    @PutMapping("/{commentId}")
    public Comment updateOneComment(@PathVariable Long commentId, @RequestBody CommentUpdateRequest updateCommentRequest) {
        return commentService.updateOneComment(commentId, updateCommentRequest);
    }

    @DeleteMapping("/{commentId}")
    public void deleteOneComment(@PathVariable Long commentId) {
        commentService.deleteOneComment(commentId);
    }

}
