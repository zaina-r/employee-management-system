package com.practice.employee_management_system.dto;

import com.practice.employee_management_system.model.Department;
import jakarta.validation.constraints.NotNull;
import org.springframework.lang.NonNull;


public class EmployeeDTO{
    @NotNull
    private String empId;
    @NotNull(message = "Please enter the first name")
    private String firstName;
    @NotNull(message = "Please enter the last name")
    private String lastName;
    @NotNull(message = "Please enter the email")
    private String email;
    @NotNull
    private String department;
    @NotNull
    private String designation;
    @NotNull
    private String role;

    public EmployeeDTO(String empId, String firstName, String lastName, String email, String department, String designation, String role) {
        this.empId = empId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.department = department;
        this.designation = designation;
        this.role = role;
    }

    public EmployeeDTO() {
    }

    public String getEmpId() {
        return empId;
    }

    public void setEmpId(String empId) {
        this.empId = empId;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public String getDesignation() {
        return designation;
    }

    public void setDesignation(String designation) {
        this.designation = designation;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }
}
