package com.secured_customer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.secured_customer.dao.AuthenticationRequest;
import com.secured_customer.dao.AuthenticationResponse;
import com.secured_customer.dao.RegisterRequest;
import com.secured_customer.model.Employee;
import com.secured_customer.model.Role;
import com.secured_customer.repository.CustomerRepository;

@Service
public class AuthenticationService {

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private CustomerRepository custRepo;
	
	@Autowired
	private JwtService jwtService;
	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	
	public AuthenticationResponse register(RegisterRequest request) {
		
		var user = Employee.builder()
				.username(request.getUsername())
				.name(request.getName())
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.address(request.getAddress())
				.mobileNo(request.getMobileNo())
				.role(Role.USER)
				.build();
		custRepo.save(user);
		
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder().token(jwtToken).build();
	}
	
	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getUsername(),request.getPassword()));
		var user = custRepo.findByUsername(request.getUsername()).orElseThrow();
		
		var jwtToken = jwtService.generateToken(user);
		return AuthenticationResponse.builder().token(jwtToken).build();
		
	}
	public void validateToken(String token) {
		jwtService.validateToken(token);
	}
}
