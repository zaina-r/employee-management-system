import AdminHeader from "./AdminHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const [user, setUser] = useState({});

  useEffect(() => {
    loadUser();
  }, []);

  const navigate = useNavigate();

  const loadUser = async () => {
    try {
      const token = localStorage.getItem("JWT");

      const response = await axios.get("http://localhost:8080/employee/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setUser(response.data);
    } catch (error) {
      if (error.response) {
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

  const handleAddNewEmployee = () => {
    navigate("/admin/add-employee");
    };
    
    const viewAllEmployees = () => {
    navigate("/employee/all");
  };

  return (
    <>
      <AdminHeader />
      <h1>Welcome, {user.firstName}</h1>
      <Button variant="outline-dark" onClick={handleAddNewEmployee}>
        Add New Employee
      </Button>
      <Button variant="outline-dark" onClick={viewAllEmployees} >View All Employees</Button>
    </>
  );
}

export default AdminDashboard;
