import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home.jsx'
import AllEmployees from './Employees.jsx'
import AdminLogin from './AdminLogin.jsx'
import EmployeeLogin from './EmployeeLogin.jsx'
import AdminDashboard from './AdminDashboard.jsx'
import AddEmployee from './AddEmployee.jsx'
import AllDepartments from './AllDepartments.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/employee/login' element={<EmployeeLogin />} />
        <Route exact path='/admin/login' element={<AdminLogin />} />
        <Route exact path='admin/employee/all' element={<AllEmployees />} />
        <Route exact path='/admin/dashboard' element={<AdminDashboard />} />
        <Route exact path='/admin/add-employee' element={<AddEmployee />} />
        <Route exact path='/admin/departments' element={<AllDepartments/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
