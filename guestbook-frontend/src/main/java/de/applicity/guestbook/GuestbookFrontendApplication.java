package de.applicity.guestbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = { "de.applicity.guestbook" })
public class GuestbookFrontendApplication {

	public static void main(String[] args) {
		SpringApplication.run(GuestbookFrontendApplication.class, args);
	}

}
