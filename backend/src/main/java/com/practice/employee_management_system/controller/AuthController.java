package com.practice.employee_management_system.controller;

import com.practice.employee_management_system.model.Employee;
import com.practice.employee_management_system.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
@CrossOrigin("http://localhost:5173")
public class AuthController {
    @Autowired
    private EmployeeService employeeService;
    @PostMapping("/login")
    public String login(@RequestBody Employee employee){
        return employeeService.verifyUser(employee);
    }
}
