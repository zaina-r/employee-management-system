package com.practice.employee_management_system.service;

import com.practice.employee_management_system.model.Department;
import com.practice.employee_management_system.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DepartmentService {
    @Autowired
    private DepartmentRepository departmentRepository;

    public List<Department> findAllDepartments(){
        return departmentRepository.findAll();
    }

}
