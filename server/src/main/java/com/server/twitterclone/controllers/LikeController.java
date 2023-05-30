package com.server.twitterclone.controllers;

import com.server.twitterclone.entities.Like;
import com.server.twitterclone.request.LikeCreateRequest;
import com.server.twitterclone.request.UnlikeTweetRequest;
import com.server.twitterclone.responses.LikeResponse;
import com.server.twitterclone.services.LikeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/likes")
public class LikeController {
    private LikeService likeService;

    public LikeController(LikeService likeService) {
        this.likeService = likeService;
    }

    @GetMapping
    public List<LikeResponse> getAllLikes(@RequestParam Optional<Long> userId, @RequestParam Optional<Long> tweetId) {
        return likeService.getAllLikes(userId, tweetId);
    }

    @PostMapping
    public LikeResponse createOneLike(@RequestBody LikeCreateRequest request) {
        return likeService.createOneLike(request);
    }

    @GetMapping("/{likeId}")
    public Like getOneLike(@PathVariable Long likeId) {
        return likeService.getOneLike(likeId);
    }

    @DeleteMapping()
    public void deleteOneLike(@RequestBody UnlikeTweetRequest unlikeTweetRequest) {
        likeService.deleteOneLike(unlikeTweetRequest);
    }
}
