package com.server.twitterclone.services;

import com.server.twitterclone.entities.Tweet;
import com.server.twitterclone.entities.User;
import com.server.twitterclone.repos.TweetRepository;
import com.server.twitterclone.request.TweetCreateRequest;
import com.server.twitterclone.request.TweetUpdateRequest;
import com.server.twitterclone.responses.TweetResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class TweetService {

    private TweetRepository tweetRepository;
    private UserService userService;

    public TweetService(TweetRepository tweetRepository, UserService userService) {
        this.tweetRepository = tweetRepository;
        this.userService = userService;
    }

    public List<TweetResponse> getAllTweets(Optional<Long> userId) {
        List<Tweet> tweetList;
        if(userId.isPresent()) {
            tweetList = tweetRepository.findByUserId(userId.get());
        } else {
            tweetList = tweetRepository.findAll();
        }

        return tweetList.stream().map(tweet -> new TweetResponse(tweet)).collect(Collectors.toList());
    }

    public Tweet createTweet(TweetCreateRequest newTweetRequest) {
        User user = userService.getOneUser(newTweetRequest.getUserId());

        if(user == null) {
            return null;
        }

        Tweet newTweet = new Tweet();
        newTweet.setId(newTweetRequest.getId());
        newTweet.setText(newTweetRequest.getText());
        newTweet.setUser(user);

        return tweetRepository.save(newTweet);
    }

    public Tweet getOneTweet(Long tweetId) {
        return tweetRepository.findById(tweetId).orElse(null);
    }

    public Tweet updateOneTweet(Long tweetId, TweetUpdateRequest updateTweet) {
        Optional<Tweet> tweet = tweetRepository.findById(tweetId);

        if(tweet.isPresent()) {
            Tweet toUpdate = tweet.get();
            toUpdate.setText(updateTweet.getText());
            tweetRepository.save(toUpdate);

            return toUpdate;
        }

        return null;
    }

    public void deleteOneTweet(Long tweetId) {
        tweetRepository.deleteById(tweetId);
    }
}
