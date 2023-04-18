package com.server.twitterclone.responses;

import com.server.twitterclone.entities.Tweet;
import lombok.Data;

@Data
public class TweetResponse {
    Long id;
    Long userId;
    String userName;
    String text;

    public TweetResponse(Tweet entity) {
        this.id = entity.getId();
        this.text = entity.getText();
        this.userId = entity.getUser().getId();
        this.userName = entity.getUser().getUserName();
    }
}
