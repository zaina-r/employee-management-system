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

export function EmployeeProfile() {

  const EmployeeDetails = () => {
    const { id } = useParams(); // Get the emp ID from URL
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const fetchEmployee = async () => {
        try {
          const res = await fetch(`http://localhost:8080/employee/${id}`);
          if (!res.ok) throw new Error('Employee not found');
          const data = await res.json();
          setEmployee(data);
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };

      fetchEmployee();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (!employee) return <p>No employee found.</p>;

    return (
      <div>
        <h2>{employee.name}</h2>
        <p>Position: {employee.position}</p>
        <p>Email: {employee.email}</p>
        {/* Add more fields as needed */}
      </div>
    );
  }
}

export default AllEmployees;
