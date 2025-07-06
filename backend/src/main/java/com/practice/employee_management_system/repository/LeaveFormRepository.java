package com.practice.employee_management_system.repository;

import com.practice.employee_management_system.model.LeaveForm;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveFormRepository extends JpaRepository<LeaveForm, Integer> {
}
