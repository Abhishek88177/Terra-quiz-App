package com.farm_bazaar.filter;

import java.util.List;
import java.util.function.Predicate;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

@Component
public class RouteValidator {
	public static final List<String> openApiEndpoints = List.of(
			"/api/v1/auth/**","/api/v1/customer/","/tracker","/image/**");
	
	public Predicate<ServerHttpRequest> isSecured= request ->
	openApiEndpoints.stream().noneMatch(uri->request.getURI().getPath().equals(uri));
			
}
