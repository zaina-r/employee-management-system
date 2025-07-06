package com.practice.employee_management_system.model;

import jakarta.persistence.*;

import java.sql.Date;

@Entity
public class LeaveForm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int formId;
    @ManyToOne
    @JoinColumn(name = "employeeId", referencedColumnName = "employeeId")
    private Employee employee;
    @Column
    private Date applicationDate;
    @Column(nullable = false)
    private Date fromDate;
    @Column(nullable = false)
    private Date toDate;
    @Column(nullable = false)
    private int noOfLeaveDays;
    @Column(nullable = false)
    private String reason;

    public LeaveForm(int formId, Employee employee, Date applicationDate, Date fromDate, Date toDate, int noOfLeaveDays, String reason) {
        this.formId = formId;
        this.employee = employee;
        this.applicationDate = applicationDate;
        this.fromDate = fromDate;
        this.toDate = toDate;
        this.noOfLeaveDays = noOfLeaveDays;
        this.reason = reason;
    }

    public LeaveForm() {
    }

    public int getFormId() {
        return formId;
    }

    public void setFormId(int formId) {
        this.formId = formId;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
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
