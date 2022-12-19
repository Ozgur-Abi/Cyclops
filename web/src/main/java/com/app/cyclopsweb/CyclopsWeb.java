package com.app.cyclopsweb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


@EnableConfigurationProperties
@EntityScan(basePackages = {"com.app.entity"})
@ComponentScan(basePackages = {"com.app"})
@EnableJpaRepositories(basePackages = {"com.app.repository"})
@SpringBootApplication(exclude = { org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration.class})
public class CyclopsWeb {

	private static ConfigurableApplicationContext applicationContext;

	public static void main(String[] args) {
		CyclopsWeb.applicationContext = SpringApplication.run(CyclopsWeb.class, args);
	}

}
