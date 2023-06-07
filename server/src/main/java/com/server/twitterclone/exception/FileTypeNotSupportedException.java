package com.server.twitterclone.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
public class FileTypeNotSupportedException extends RuntimeException {

    public FileTypeNotSupportedException(String message) {
        super(message);
    }
}
