package com.practice.employee_management_system.service;

import com.practice.employee_management_system.model.Employee;
import com.practice.employee_management_system.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    public List<Employee> findAllEmployees(){
        return employeeRepository.findAll();
    }

    public Optional<Employee> findEmployeeById(String id){
        return employeeRepository.findById(id);
        //"Optional" is added to handle the cases where the provided id doesn't exist
    }

    public void addNewEmployee(Employee employee){

        employeeRepository.save(employee);
    }

}
