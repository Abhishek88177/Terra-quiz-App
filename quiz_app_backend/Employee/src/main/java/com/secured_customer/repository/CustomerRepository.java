package com.secured_customer.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.secured_customer.model.Employee;

@Repository
public interface CustomerRepository extends JpaRepository<Employee,Integer> {
	
	Optional<Employee> findByUsername(String username);

}
