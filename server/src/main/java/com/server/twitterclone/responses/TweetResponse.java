package com.server.twitterclone.responses;

import com.server.twitterclone.entities.Tweet;
import lombok.Data;

import java.util.Date;

@Data
public class TweetResponse {
    Long id;
    Long userId;
    String userName;
    String text;
    String name;

    Date createdAt;

    public TweetResponse(Tweet entity) {
        this.id = entity.getId();
        this.text = entity.getText();
        this.userId = entity.getUser().getId();
        this.userName = entity.getUser().getUserName();
        this.name = entity.getUser().getName();
        this.createdAt = entity.getCreatedAt();
    }
}
