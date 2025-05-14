package com.practice.employee_management_system.controller;

import com.practice.employee_management_system.model.Department;
import com.practice.employee_management_system.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/departments")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @GetMapping("/get-all")
    public ResponseEntity<List<Department>> findAllDepartments(){
        return ResponseEntity.ok(departmentService.findAllDepartments());
    }
}
