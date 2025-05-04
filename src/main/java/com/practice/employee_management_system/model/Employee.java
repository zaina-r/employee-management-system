package com.practice.employee_management_system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Employee {
    @Id
    String id;
    String EmployeeId;
    String firstName;
    String lastName;
    String department;
}
