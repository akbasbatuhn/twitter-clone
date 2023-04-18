package com.server.twitterclone.request;

import lombok.Data;

@Data
public class LikeCreateRequest {
    Long id;
    Long userId;
    Long tweetId;
}
