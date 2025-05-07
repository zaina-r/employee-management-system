package com.practice.employee_management_system.repository;

import com.practice.employee_management_system.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, String> {
    Optional<Employee> findByEmployeeId(String employeeId);
    boolean existsByEmployeeId(String employeeId);

    void deleteByEmployeeId(String employeeId);
}
