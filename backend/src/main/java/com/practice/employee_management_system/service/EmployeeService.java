package com.practice.employee_management_system.service;

import com.practice.employee_management_system.model.Employee;
import com.practice.employee_management_system.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JWTService jwtService;

    public List<Employee> findAllEmployees(){
        return employeeRepository.findAll();
    }

    public Optional<Employee> findByEmployeeId(String employeeId){
        if (!employeeRepository.existsByEmployeeId(employeeId)) {
            throw new RuntimeException("Employee not found");
        }
        return employeeRepository.findByEmployeeId(employeeId);
    }

    public void addNewEmployee(Employee employee){
        employeeRepository.save(employee);
    }

    public void updateEmployee(String employeeId, Map<String, Object> body){
        Optional<Employee> employee = employeeRepository.findByEmployeeId(employeeId);
    }

    @Transactional
    public void deleteEmployee(String employeeId){
        if (!employeeRepository.existsByEmployeeId(employeeId)) {
            throw new RuntimeException("Employee not found");
        }
        employeeRepository.deleteByEmployeeId(employeeId);
    }

    public List<Employee> findByDepartmentName(String departmentName){
        return employeeRepository.findByDepartmentDepartmentName(departmentName);
    }

    public String verifyUser(Employee employee) {
        Authentication authentication =
                authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(employee.getUsername(), employee.getPassword()));
        if(authentication.isAuthenticated())
            return jwtService.generateToken(employee);
        return "Unsuccessful";
    }


}
