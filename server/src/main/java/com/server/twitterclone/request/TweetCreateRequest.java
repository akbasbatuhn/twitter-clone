package com.server.twitterclone.request;

import lombok.Data;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

@Data
public class TweetCreateRequest {

    Long id;
    Long userId;
    String text;
    @NotFound(action = NotFoundAction.IGNORE)
    Long parentId;
}
