import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

function EmployeeLogin() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const [redirect, setRedirect] = useState(false);

  const handleUsernameChange = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  const handlePasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      alert("Incorrect username or password");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });

      const token = response.data;

      localStorage.setItem("JWT", token);

      alert("Login Successful!");

      setRedirect(true);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  if (redirect) {
    return <Navigate to="/employee/dashboard" replace />;
  }

  return (
    <>
      <Link type="submit" className="btn btn-secondary" to="/">
        Back
      </Link>
      <form
        id="employee-login"
        className="container-sm"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="usernameInput" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="usernameInput"
            aria-describedby="usernameHelp"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordInput"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </>
  );
}

export default EmployeeLogin;
