package com.server.twitterclone.controllers;

import com.server.twitterclone.entities.User;
import com.server.twitterclone.request.EditUserProfileImageRequest;
import com.server.twitterclone.request.UserCreateRequest;
import com.server.twitterclone.responses.UserResponse;
import com.server.twitterclone.services.UserService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @PostMapping
    public UserResponse createUser(@RequestBody UserCreateRequest request) {
        return userService.createUser(request);
    }

    @GetMapping("/{userId}")
    public UserResponse getUserById(@PathVariable Long userId) {
        User user = userService.getOneUser(userId);
        return new UserResponse(user);
    }

    @PutMapping("/{userId}")
    public UserResponse updateOneUser(@PathVariable Long userId, @RequestBody User newUser) {
        return userService.updateOneUser(userId, newUser);
    }

    @DeleteMapping("/{userId}")
    public void deleteOneUser(@PathVariable Long userId) {
        userService.deleteOneUser(userId);
    }

    @PostMapping(
            value = "/{userId}/profile-image",
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE
    )
    public UserResponse updateProfileImage(@PathVariable Long userId,
                                           @ModelAttribute EditUserProfileImageRequest request) {
        return userService.changeProfileImage(userId, request);
    }

    @GetMapping(
            value = "/{userId}/profile-image",
            produces = MediaType.IMAGE_JPEG_VALUE
    )
    public byte[] getProfileImage(@PathVariable Long userId) {
        return userService.getUserProfileImage(userId);
    }
}
