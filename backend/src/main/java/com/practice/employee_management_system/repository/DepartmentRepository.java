package com.practice.employee_management_system.repository;

import com.practice.employee_management_system.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepository extends JpaRepository<Department, String> {
}
