package com.practice.employee_management_system.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Department {
    @Id
    String id;
    String departmentName;
    String departmentHead;
}
