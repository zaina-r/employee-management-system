package com.practice.employee_management_system.dto;

import com.practice.employee_management_system.model.Employee;
import jakarta.validation.constraints.NotNull;

import java.sql.Date;

public class LeaveFormDTO{
    @NotNull(message = "Please enter employee details")
    private EmployeeDTO employee;
    @NotNull(message = "Please enter employee details")
    private Date applicationDate;
    @NotNull(message = "Please enter starting dat")
    private Date fromDate;
    @NotNull(message = "Please enter ending date")
    private Date toDate;
    @NotNull
    private int noOfLeaveDays;
    @NotNull(message = "Please enter the reason for the leave request")
    private String reason;

    public LeaveFormDTO(EmployeeDTO employee, Date applicationDate, Date fromDate, Date toDate, int noOfLeaveDays, String reason) {
        this.employee = employee;
        this.applicationDate = applicationDate;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.noOfLeaveDays = noOfLeaveDays;
        this.reason = reason;
    }

    public LeaveFormDTO() {
    }

    public EmployeeDTO getEmployee() {
        return employee;
    }

    public void setEmployee(EmployeeDTO employee) {
        this.employee = employee;
    }

    public Date getApplicationDate() {
        return applicationDate;
    }

    public void setApplicationDate(Date applicationDate) {
        this.applicationDate = applicationDate;
    }

    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    public Date getToDate() {
        return toDate;
    }

    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }

    public int getNoOfLeaveDays() {
        return noOfLeaveDays;
    }

    public void setNoOfLeaveDays(int noOfLeaveDays) {
        this.noOfLeaveDays = noOfLeaveDays;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
