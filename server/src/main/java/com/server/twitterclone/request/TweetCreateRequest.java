package com.server.twitterclone.request;

import lombok.Data;

@Data
public class TweetCreateRequest {

    Long id;
    Long userId;
    String text;
    // Date tweetDate;
}
