package com.practice.employee_management_system.service;

import com.practice.employee_management_system.model.Employee;
import com.practice.employee_management_system.model.EmployeePrincipal;
import com.practice.employee_management_system.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailsService implements org.springframework.security.core.userdetails.UserDetailsService {

    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Employee employee = employeeRepository.findByUsername(username);
        if(employee == null){
            System.out.println("USER NOT FOUND!");
            throw new UsernameNotFoundException("USER IS NOT FOUND!!");
        }
        return new EmployeePrincipal(employee);
    }
}
