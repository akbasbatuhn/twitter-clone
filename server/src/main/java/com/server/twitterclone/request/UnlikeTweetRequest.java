package com.server.twitterclone.request;

import lombok.Data;

@Data
public class UnlikeTweetRequest {
    Long id;
    Long userId;
    Long tweetId;
}
