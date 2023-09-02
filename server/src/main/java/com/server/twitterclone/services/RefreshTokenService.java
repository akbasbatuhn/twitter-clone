package com.server.twitterclone.services;

import com.server.twitterclone.entities.RefreshToken;
import com.server.twitterclone.entities.User;
import com.server.twitterclone.exception.RefreshTokenNotFoundException;
import com.server.twitterclone.repos.RefreshTokenRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.Date;
import java.util.UUID;

@Service
public class RefreshTokenService {

    @Value("${refresh.token.expires.in}")
    private Long expireInSeconds;

    private final RefreshTokenRepository refreshTokenRepository;

    public RefreshTokenService(RefreshTokenRepository refreshTokenRepository) {
        this.refreshTokenRepository = refreshTokenRepository;
    }

    public String createRefreshToken(User user) {
        RefreshToken token = getGivenUsersRefreshToken(user);
        return token.getToken();
    }

    public RefreshToken getByUser(Long userId) {
        return getGivenUsersRefreshToken(userId);
    }

    public boolean isRefreshExpired(RefreshToken token) {
        return token.getExpiryDate().before(new Date());
    }

    private RefreshToken getGivenUsersRefreshToken(Long userId) {
        return refreshTokenRepository.findByUserId(userId)
                .orElseThrow(() -> new RefreshTokenNotFoundException(
                        "Refresh token not found with given user id: %s".formatted(userId)
                ));
    }

    private RefreshToken getGivenUsersRefreshToken(User user) {
        return refreshTokenRepository.findByUserId(user.getId())
                .orElse(createNewRefreshToken(user));
    }

    private RefreshToken createNewRefreshToken(User user) {
        RefreshToken newToken = new RefreshToken();
        newToken.setUser(user);

        newToken.setToken(UUID.randomUUID().toString());
        newToken.setExpiryDate(Date.from(Instant.now().plusSeconds(expireInSeconds)));

        refreshTokenRepository.save(newToken);

        return newToken;
    }
}
