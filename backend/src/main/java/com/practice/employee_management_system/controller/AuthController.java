package com.practice.employee_management_system.controller;

import com.practice.employee_management_system.model.Employee;
import com.practice.employee_management_system.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping("/login")
    public String login(@RequestBody Employee employee){
        return employeeService.verifyUser(employee);
    }
}
