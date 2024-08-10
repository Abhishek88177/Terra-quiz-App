package com.secured_customer.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.secured_customer.model.Employee;
import com.secured_customer.service.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/customer")

public class CustomerController {
	
	@Autowired
	private CustomerService customerService;
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getCustomerById(@PathVariable Integer id) {
		Employee customer = customerService.getUserById(id);
		return customer != null ? ResponseEntity.ok(customer) : ResponseEntity.notFound().build();
	}
	
	
}
