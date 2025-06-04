import axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

function UserDashboard() {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const token = localStorage.getItem("JWT")
      const decoded = jwtDecode(token)
      const employeeId = decoded.employeeId

      const response = await axios.get(
        "http://localhost:8080/employee/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEmployee(response.data);
      
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
        <h1>Welcome, {employee.firstName}</h1>
        <p>
          EmployeeId: {employee.employeeId} | {employee.designation}
        </p>
      </div>
    </>
  );
}

export default UserDashboard;
