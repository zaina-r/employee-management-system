package com.practice.employee_management_system.repository;

import com.practice.employee_management_system.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, String> {
    Optional<Employee> findByEmployeeId(String employeeId);
    Employee findByUsername(String username);
    boolean existsByEmployeeId(String employeeId);
    boolean existsByUsername(String username);
    void deleteByEmployeeId(String employeeId);
    List<Employee> findByDepartmentDepartmentName(String departmentName);

}
