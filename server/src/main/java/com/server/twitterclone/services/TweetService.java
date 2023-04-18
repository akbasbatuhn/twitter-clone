package com.server.twitterclone.services;

import com.server.twitterclone.entities.Tweet;
import com.server.twitterclone.entities.User;
import com.server.twitterclone.repos.TweetRepository;
import com.server.twitterclone.request.TweetCreateRequest;
import com.server.twitterclone.request.TweetUpdateRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TweetService {

    private TweetRepository tweetRepository;
    private UserService userService;

    public TweetService(TweetRepository tweetRepository, UserService userService) {
        this.tweetRepository = tweetRepository;
        this.userService = userService;
    }

    public List<Tweet> getAllTweets(Optional<Long> userId) {
        if(userId.isPresent()) {
            return tweetRepository.findByUserId(userId.get());
        }
        return tweetRepository.findAll();
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
