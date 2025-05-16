import React, { useEffect, useState } from "react";
import "./Employees.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    const result = await axios.get("http://localhost:8080/employee/all");
    setEmployees(result.data);
  };

  return (
    <>
      <div className="container-fluid">
        <table
          className="table table-striped table-hover table-lg"
          style={{ width: "100%" }}
        >
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">EmployeeId</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Adress</th>
              <th scope="col">Designation</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{employee.employeeId}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.designation}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllEmployees;
