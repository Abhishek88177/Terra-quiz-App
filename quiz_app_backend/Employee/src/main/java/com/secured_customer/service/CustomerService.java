package com.secured_customer.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.stereotype.Service;

import com.secured_customer.model.Employee;
import com.secured_customer.repository.CustomerRepository;

@Service
public class CustomerService {
	
	
	@Autowired
	private CustomerRepository custRepo;

    @Secured("ROLE_ADMIN")
	public Employee getUserById(Integer id) {
    	
		return custRepo.findById(id).orElse(null);
	}
    
  
}
