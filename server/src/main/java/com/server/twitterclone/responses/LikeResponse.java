package com.server.twitterclone.responses;

import com.server.twitterclone.entities.Like;
import lombok.Data;

@Data
public class LikeResponse {

    Long id;
    Long userId;
    Long tweetId;

    public LikeResponse(Like entity) {
        this.id = entity.getId();
        this.userId = entity.getUser().getId();
        this.tweetId = entity.getTweet().getId();
    }
}
