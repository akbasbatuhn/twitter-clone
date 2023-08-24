package com.server.twitterclone.services;

import com.server.twitterclone.config.S3Buckets;
import com.server.twitterclone.entities.User;
import com.server.twitterclone.exception.FileNotFoundException;
import com.server.twitterclone.exception.FileTypeNotSupportedException;
import com.server.twitterclone.exception.UserAlreadyExistsException;
import com.server.twitterclone.exception.UserNotFoundException;
import com.server.twitterclone.repos.UserRepository;
import com.server.twitterclone.request.EditProfileDetailRequest;
import com.server.twitterclone.request.EditUserProfileImageRequest;
import com.server.twitterclone.request.UserCreateRequest;
import com.server.twitterclone.responses.UserResponse;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Service
public class UserService {
    private final PasswordEncoder passwordEncoder;
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
        return validateGivenUserExistAndReturnUserIfFound(userId);
    }

    public UserResponse updateOneUser(Long userId, EditProfileDetailRequest profile) {
        User foundUser = validateGivenUserExistAndReturnUserIfFound(userId);

        foundUser.setBio(profile.getBio());
        foundUser.setName(profile.getName());
        userRepository.save(foundUser);

        return new UserResponse(foundUser);
    }

    public void deleteOneUser(Long userId) {
        userRepository.deleteById(userId);
    }

    public User getOneUserByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new UserNotFoundException(
                        "User not found with given email: %s".formatted(email)
                ));
    }

    public User getOneUserByUsername(String username) {
        return userRepository.findByUserName(username)
                .orElseThrow(() -> new UserNotFoundException(
                        "User not found with given username: %s".formatted(username)
                ));
    }

    public UserResponse changeProfileImage(Long userId, EditUserProfileImageRequest request) {
        User user = validateGivenUserExistAndReturnUserIfFound(userId);
        uploadUserProfileImage(user, request.getProfileImageFile());

        return new UserResponse(user);
    }

    public void uploadUserProfileImage(User user, MultipartFile file) {
        String profileImageId = UUID.randomUUID().toString();


        if(file.isEmpty()) {
            throw new FileNotFoundException("Cannot upload empty file");
        }

        String fileContentType = file.getContentType();
        String fileType = fileContentType.split("/")[0];
        boolean isFileImage = fileType.equals("image");

        if(!isFileImage) {
            throw new FileTypeNotSupportedException("You can only upload image files");
        }

        try {
            s3Service.putObject(
                    s3Buckets.getProfile(),
                    "profile-images/%s/%s".formatted(user.getId(), profileImageId),
                    file.getBytes()
            );
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        user.setProfileImageId(profileImageId);
        userRepository.save(user);
    }

    public byte[] getUserProfileImage(Long userId) {
        User user = validateGivenUserExistAndReturnUserIfFound(userId);

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

    public User validateGivenUserExistAndReturnUserIfFound(Long userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new UserNotFoundException(
                        "User not found with given id: %s".formatted(userId)
                ));
    }

    public void checkUserAlreadyExists(String email) {
        if(checkUserExist(email)) {
            throw new UserAlreadyExistsException("User already exists");
        }
    }

    private boolean checkUserExist(String email) {
        return userRepository.findByEmail(email).isPresent();
    }
}
