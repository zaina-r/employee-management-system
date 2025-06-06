import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function AllDepartments() {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    loadDepartments();
  }, []);

  const loadDepartments = async () => {
    try {
      const token = localStorage.getItem("JWT");

      const response = await axios.get("http://localhost:8080/departments/get-all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDepartments(response.data);
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
              <th scope="col">Department</th>
            </tr>
          </thead>
          <tbody>
            {departments.map((departments, index) => (
              <tr key={index}>
                <th scope="row">
                  {index + 1}
                </th>
                <td>{departments.departmentName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default AllDepartments;
