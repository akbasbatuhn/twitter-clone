package com.server.twitterclone.request;

import lombok.Data;

@Data
public class CommentCreateRequest {
    Long id;
    Long userId;
    Long tweetId;
    String text;
}
