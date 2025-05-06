package com.practice.employee_management_system.controller;

import com.practice.employee_management_system.model.Employee;
import com.practice.employee_management_system.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/all")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        return ResponseEntity.ok(employeeService.findAllEmployees());
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity<Optional<Employee>> getEmployeeById(@PathVariable String employeeId){
        return new ResponseEntity<Optional<Employee>>(employeeService.findEmployeeById(employeeId), HttpStatus.OK);
    }

    @PostMapping("/add-new")
    public ResponseEntity<Employee> addNewEmployee(@RequestBody Employee employee){
        employeeService.addNewEmployee(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(employee);
    }

}
