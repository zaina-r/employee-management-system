package com.practice.employee_management_system.dto;

import com.practice.employee_management_system.model.Department;

public record EmployeeDTO (
        String empId,
        String firstName,
        String lastName,
        String email,
        String department,
        String designation
) {

}
