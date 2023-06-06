package com.server.twitterclone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TwitterCloneApplication {

	public static void main(String[] args) {
		SpringApplication.run(TwitterCloneApplication.class, args);
	}

	/*
	@Bean
	CommandLineRunner runner(
			S3Service s3Service, S3Buckets s3Buckets
	) {
		return args -> {
			s3Service.putObject(s3Buckets.getProfile(),
					"foo",
					"Hello World".getBytes());
			byte[] fooObject = s3Service.getObject("twitter-clone-profile", "foo");

			System.out.println("Hooray: " + new String(fooObject));
		};
	}
	*/
}
