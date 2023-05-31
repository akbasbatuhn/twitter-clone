package com.server.twitterclone.controllers;

import com.server.twitterclone.request.TweetCreateRequest;
import com.server.twitterclone.request.TweetUpdateRequest;
import com.server.twitterclone.responses.TweetResponse;
import com.server.twitterclone.services.TweetService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tweets")
public class TweetController {

    private TweetService tweetService;

    public TweetController(TweetService tweetService) {
        this.tweetService = tweetService;
    }

    @GetMapping
    public List<TweetResponse> getAllTweets(@RequestParam Optional<Long> userId) {
        return tweetService.getAllTweets(userId);
    }

    @PostMapping
    public TweetResponse createTweet(@RequestBody TweetCreateRequest newTweetRequest) {
        return tweetService.createTweet(newTweetRequest);
    }

    @GetMapping("/{tweetId}")
    public TweetResponse getTweetById(@PathVariable Long tweetId) {
        return tweetService.getOneTweet(tweetId);
    }


    @PutMapping("/{tweetId}")
    public TweetResponse updateOneTweet(@PathVariable Long tweetId, @RequestBody TweetUpdateRequest updateTweetRequest) {
        return tweetService.updateOneTweet(tweetId, updateTweetRequest);
    }

    @DeleteMapping("/{tweetId}")
    public void deleteOneTweet(@PathVariable Long tweetId) {
        tweetService.deleteOneTweet(tweetId);
    }

    @GetMapping("/getReplies/{parentTweetId}")
    public List<TweetResponse> findReplyTweets(@PathVariable Long parentTweetId) {
        return tweetService.findReplyTweets(parentTweetId);
    }
}
