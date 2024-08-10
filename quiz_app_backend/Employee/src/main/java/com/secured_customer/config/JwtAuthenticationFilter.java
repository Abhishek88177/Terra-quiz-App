package com.secured_customer.config;

import java.io.IOException;

import java.util.Collection;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.secured_customer.service.JwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component

public class JwtAuthenticationFilter extends OncePerRequestFilter {

	@Autowired
	private JwtService jwtService;
	@Autowired 
	private UserDetailsService userDetailsService;
	@Override
	protected void doFilterInternal(HttpServletRequest request, 
			HttpServletResponse response, FilterChain filterChain)
			throws ServletException, IOException {
		final String authHeader=request.getHeader("Authorization");
		final String jwt;
		final String userName;
		
		if(authHeader == null || !authHeader.startsWith("Bearer ")) {
			filterChain.doFilter(request, response);
			return;
		}
		 
		jwt=authHeader.substring(7);
		userName=jwtService.extractUserName(jwt);
		if(userName != null && SecurityContextHolder.getContext().getAuthentication()==null) {
			UserDetails userDetails = this.userDetailsService.loadUserByUsername(userName);
			
			if(jwtService.isTokenValid(jwt,userDetails)) {
				
				UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
				authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
				SecurityContextHolder.getContext().setAuthentication(authToken);
			}
		}
		
		filterChain.doFilter(request, response);
	}

}

//public class JwtAuthenticationFilter extends OncePerRequestFilter {
//
//	@Autowired
//	private JwtService jwtService;
//	@Autowired 
//	private UserDetailsService userDetailsService;
//	@Override
//	protected void doFilterInternal(HttpServletRequest request, 
//			HttpServletResponse response, FilterChain filterChain)
//			throws ServletException, IOException {
//		final String authHeader=request.getHeader("Authorization");
//		final String jwt;
//		final String userName;
//		
//		if(authHeader == null || !authHeader.startsWith("Bearer ")) {
//			filterChain.doFilter(request, response);
//			return;
//		}
//		
//		jwt=authHeader.substring(7);
//		userName=jwtService.extractUserName(jwt);
//		if(userName != null && SecurityContextHolder.getContext().getAuthentication()==null) {
//			UserDetails userDetails = this.userDetailsService.loadUserByUsername(userName);
//			
//			if(jwtService.isTokenValid(jwt,userDetails)) {
//				Collection<? extends GrantedAuthority> authorities = userDetails.getAuthorities();
//	            if (authorities.contains(new SimpleGrantedAuthority("ROLE_ADMIN"))) {
//	                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, authorities);
//	                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//	                SecurityContextHolder.getContext().setAuthentication(authToken);
//	            }
//			}
//		}
//		
//		filterChain.doFilter(request, response);
//	}

//}
