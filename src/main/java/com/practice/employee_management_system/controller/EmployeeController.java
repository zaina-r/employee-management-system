package com.practice.employee_management_system.controller;

import com.practice.employee_management_system.model.Employee;
import com.practice.employee_management_system.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        return ResponseEntity.ok(employeeService.findAllEmployees());
    }

    @PostMapping("/add-new")
    public ResponseEntity<Employee> addNewEmployee(@RequestBody Employee employee){
        employeeService.addNewEmployee(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(employee);
    }

}
