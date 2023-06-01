package com.server.twitterclone.responses;

import com.server.twitterclone.entities.Tweet;
import lombok.Data;

import java.util.Date;
import java.util.List;

@Data
public class TweetResponse {
    Long id;
    Long userId;
    String userName;
    String text;
    String name;
    List<LikeResponse> likes;
    List<TweetResponse> replies;
    Date createdAt;

    public TweetResponse(Tweet entity,
                         List<LikeResponse> likeList,
                         List<TweetResponse> replies) {
        this.id = entity.getId();
        this.text = entity.getText();
        this.userId = entity.getUser().getId();
        this.userName = entity.getUser().getUserName();
        this.name = entity.getUser().getName();
        this.createdAt = entity.getCreatedAt();
        this.likes = likeList;
        this.replies = replies;
    }
}
