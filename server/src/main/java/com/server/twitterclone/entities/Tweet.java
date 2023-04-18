package com.server.twitterclone.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;

@Entity
@Table(name = "tweet")
@Data
public class Tweet {
    @Id
    Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JsonIgnore
    User user;
    /*
    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
    Date date;
     */
    @Lob
    @Column(columnDefinition = "text")
    String text;
}
