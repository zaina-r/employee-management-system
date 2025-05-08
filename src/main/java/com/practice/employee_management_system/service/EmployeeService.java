package com.practice.employee_management_system.service;

import com.practice.employee_management_system.model.Employee;
import com.practice.employee_management_system.repository.EmployeeRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

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
}
