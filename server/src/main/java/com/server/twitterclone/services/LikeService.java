package com.server.twitterclone.services;

import com.server.twitterclone.entities.Like;
import com.server.twitterclone.entities.Tweet;
import com.server.twitterclone.entities.User;
import com.server.twitterclone.repos.LikeRepository;
import com.server.twitterclone.request.LikeCreateRequest;
import com.server.twitterclone.request.UnlikeTweetRequest;
import com.server.twitterclone.responses.LikeResponse;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class LikeService {
    private LikeRepository likeRepository;
    private UserService userService;
    private TweetService tweetService;

    public LikeService(LikeRepository likeRepository, UserService userService,
                       @Lazy TweetService tweetService) {
        this.likeRepository = likeRepository;
        this.userService = userService;
        this.tweetService = tweetService;
    }

    public List<LikeResponse> getAllLikes(Optional<Long> userId, Optional<Long> tweetId) {
        List<Like> likeList;
        if(userId.isPresent() && tweetId.isPresent()) {
            likeList = new ArrayList<>();
            likeList.add(likeRepository.findByUserIdAndTweetId(userId.get(), tweetId.get()));
        } else if(userId.isPresent()) {
            likeList = likeRepository.findByUserId(userId.get());
        } else if(tweetId.isPresent()) {
            likeList = likeRepository.findByTweetId(tweetId.get());
        } else {
            likeList = likeRepository.findAll();
        }

        return likeList.stream().map(like -> new LikeResponse(like)).collect(Collectors.toList());
    }

    public Like getOneLike(Long LikeId) {
        return likeRepository.findById(LikeId).orElse(null);
    }

    public LikeResponse createOneLike(LikeCreateRequest request) {
        User user = userService.getOneUser(request.getUserId());
        Tweet tweet = tweetService.findTweetById(request.getTweetId());

        Like found = likeRepository.findByUserIdAndTweetId(user.getId(), tweet.getId());

        if(found != null) {
            return new LikeResponse(found);
        }
        if(user != null && tweet != null) {
            Like likeToSave = new Like();
            likeToSave.setId(request.getId());
            likeToSave.setTweet(tweet);
            likeToSave.setUser(user);

            likeRepository.save(likeToSave);
            return new LikeResponse(likeToSave);
        }

        return null;
    }

    public void deleteOneLike(UnlikeTweetRequest unlikeTweetRequest) {
        Like like = likeRepository.findByUserIdAndTweetId
                (unlikeTweetRequest.getUserId(), unlikeTweetRequest.getTweetId());
        likeRepository.deleteById(like.getId());
    }
}
