package com.server.twitterclone.services;

import com.server.twitterclone.config.S3Buckets;
import com.server.twitterclone.entities.User;
import com.server.twitterclone.repos.UserRepository;
import com.server.twitterclone.request.EditUserProfileImageRequest;
import com.server.twitterclone.request.UserCreateRequest;
import com.server.twitterclone.responses.UserResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class UserService {
    private PasswordEncoder passwordEncoder;
    private final UserRepository userRepository;
    private final S3Service s3Service;
    private final S3Buckets s3Buckets;

    public UserService(UserRepository userRepository,
                       S3Service s3Service,
                       S3Buckets s3Buckets,
                       PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.s3Service = s3Service;
        this.s3Buckets = s3Buckets;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public UserResponse createUser(UserCreateRequest request) {
        User user = new User();
        user.setName(request.getName());
        user.setUserName(request.getUserName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setCreatedAt(new Date());

        user.setProfileImageId("default_profile_picture");

        userRepository.save(user);

        return new UserResponse(user);
    }

    public User getOneUser(Long userId) {
        // TODO: custom exception handler
        return userRepository.findById(userId).orElse(null);
    }

    public UserResponse updateOneUser(Long userId, User newUser) {
        Optional<User> user = userRepository.findById(userId);

        if(user.isPresent()) {
            User foundUser = user.get();

            foundUser.setBio(newUser.getBio());
            foundUser.setName(newUser.getName());
            userRepository.save(foundUser);
            return new UserResponse(foundUser);
        }

        return null;
    }

    public void deleteOneUser(Long userId) {
        userRepository.deleteById(userId);
    }

    public User getOneUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User getOneUserByUsername(String username) {
        return userRepository.findByUserName(username);
    }

    public UserResponse changeProfileImage(Long userId, EditUserProfileImageRequest request) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException());

        uploadUserProfileImage(userId, request.getProfileImageFile());

        return new UserResponse(user);
    }

    public void uploadUserProfileImage(Long userId, MultipartFile file) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException());
        String profileImageId = UUID.randomUUID().toString();

        try {
            s3Service.putObject(
                    s3Buckets.getProfile(),
                    "profile-images/%s/%s".formatted(userId, profileImageId),
                    file.getBytes()
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        //TODO: Store image to database
        user.setProfileImageId(profileImageId);
        userRepository.save(user);
    }

    public byte[] getUserProfileImage(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException());

        var profileImageId = user.getProfileImageId();
        var key = "profile-images/%s/%s".formatted(userId, profileImageId);

        if(profileImageId.equals("default_profile_picture")) {
            key = "profile-images/default/default_profile_picture.png";
        }

        byte[] profileImage = s3Service.getObject(
                s3Buckets.getProfile(),
                key
        );
        return profileImage;
    }
}
