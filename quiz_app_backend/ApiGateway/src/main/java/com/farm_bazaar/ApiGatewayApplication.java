package com.farm_bazaar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

import com.farm_bazaar.util.JwtUtil;

@SpringBootApplication
@EnableDiscoveryClient
public class ApiGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiGatewayApplication.class, args);
		
//		JwtUtil jwtUtil = new JwtUtil();
//		jwtUtil.printSecretKey();
	}

}
