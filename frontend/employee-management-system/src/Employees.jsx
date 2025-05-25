import { useEffect, useState } from "react";
import "./Employees.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function AllEmployees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      const token = localStorage.getItem("JWT");

      const response = await axios.get("http://localhost:8080/employee/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEmployees(response.data);
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 2xx
        console.error(
          "Backend error:",
          error.response.status,
          error.response.data
        );
        alert(
          `Error: ${error.response.status} - ${
            error.response.data.message || error.message
          }`
        );
      } else if (error.request) {
        // Request made but no response
        console.error("No response from server", error.request);
        alert("No response from server. Check backend and CORS.");
      } else {
        // Something else happened
        console.error("Error", error.message);
        alert("Error: " + error.message);
      }
    }
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
