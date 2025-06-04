package com.practice.employee_management_system.controller;

import com.practice.employee_management_system.model.Employee;
import com.practice.employee_management_system.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/employee")
@CrossOrigin("http://localhost:5173")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/all")
    @PreAuthorize("hasRole('admin')")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        return ResponseEntity.ok(employeeService.findAllEmployees());
    }

    @GetMapping("/{employeeId}")
    public ResponseEntity<Optional<Employee>> getEmployeeById(@PathVariable String employeeId) {

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loggedUsername = authentication.getName();
        Employee employee = employeeService
                .findByEmployeeId(employeeId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));
        if (!employee.getUsername().equals(loggedUsername)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }
        return ResponseEntity.ok(employeeService.findByEmployeeId(employeeId));
    }

    @GetMapping("/me")
    public ResponseEntity<Employee> getEmployeeByUsername(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String loggedUsername = authentication.getName();
        Employee employee = employeeService
                .findByUsername(loggedUsername);
        if (!employee.getUsername().equals(loggedUsername)) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN);
        }
        return ResponseEntity.ok(employee);
    }

    @GetMapping("/department/{departmentName}")
    public ResponseEntity<List<Employee>> getEmployeesByDepartment(@PathVariable String departmentName){
        return  ResponseEntity.ok((employeeService.findByDepartmentName(departmentName)));
    }

    @PatchMapping("/update/{employeeId}")
    public void updateEmployee(@PathVariable String employeeId, @RequestBody Map<String, Object> body){
        employeeService.updateEmployee(employeeId, body);
    }

    @PostMapping("/add-new")
    public ResponseEntity<Employee> addNewEmployee(@RequestBody Employee employee){
        employeeService.addNewEmployee(employee);
        return ResponseEntity.status(HttpStatus.CREATED).body(employee);
    }

    @DeleteMapping("/remove/{employeeId}")
    public ResponseEntity<String> deleteEmployee(@PathVariable String employeeId){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee " + employeeId + " has been removed from the database");
    }
}
