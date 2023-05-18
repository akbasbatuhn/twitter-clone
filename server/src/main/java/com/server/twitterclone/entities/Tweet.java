package com.server.twitterclone.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Table(name = "tweet")
@Data
public class Tweet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    User user;

    @Lob
    @Column(columnDefinition = "text")
    String text;

    @Temporal(TemporalType.TIMESTAMP)
    Date createdAt;
}
