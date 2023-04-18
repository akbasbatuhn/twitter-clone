package com.server.twitterclone.services;

import com.server.twitterclone.entities.Like;
import com.server.twitterclone.entities.Tweet;
import com.server.twitterclone.entities.User;
import com.server.twitterclone.repos.LikeRepository;
import com.server.twitterclone.request.LikeCreateRequest;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LikeService {
    private LikeRepository likeRepository;
    private UserService userService;
    private TweetService tweetService;

    public LikeService(LikeRepository likeRepository, UserService userService,
                       TweetService tweetService) {
        this.likeRepository = likeRepository;
        this.userService = userService;
        this.tweetService = tweetService;
    }

    public List<Like> getAllLikes(Optional<Long> userId, Optional<Long> tweetId) {
        if(userId.isPresent() && tweetId.isPresent()) {
            return likeRepository.findByUserIdAndTweetId(userId.get(), tweetId.get());
        } else if(userId.isPresent()) {
            return likeRepository.findByUserId(userId.get());
        } else if(tweetId.isPresent()) {
            return likeRepository.findByTweetId(tweetId.get());
        } else
            return likeRepository.findAll();
    }

    public Like getOneLike(Long LikeId) {
        return likeRepository.findById(LikeId).orElse(null);
    }

    public Like createOneLike(LikeCreateRequest request) {
        User user = userService.getOneUser(request.getUserId());
        Tweet tweet = tweetService.getOneTweet(request.getTweetId());

        if(user != null && tweet != null) {
            Like likeToSave = new Like();
            likeToSave.setId(request.getId());
            likeToSave.setTweet(tweet);
            likeToSave.setUser(user);

            return likeRepository.save(likeToSave);
        }

        return null;
    }

    public void deleteOneLike(Long likeId) {
        likeRepository.deleteById(likeId);
    }
}
