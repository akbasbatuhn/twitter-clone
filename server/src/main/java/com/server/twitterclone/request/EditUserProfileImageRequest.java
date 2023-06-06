package com.server.twitterclone.request;

import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
public class EditUserProfileImageRequest {
    MultipartFile profileImageFile;
}
