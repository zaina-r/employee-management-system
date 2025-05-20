import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="container-m text-center">
        <div className="row m-5">
          <div className="col login m-3 p-5 border">
            <p>Login as employee</p>
            <Link type="button" className="btn btn-primary btn-lg employee-login" to='/employee/login'>Employee Login</Link>
          </div>
          <div className="col login m-3 p-5 border">
            <p>Log in as Admin</p>
            <button type="button" className="btn btn-primary btn-lg employee-login">Admin Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
