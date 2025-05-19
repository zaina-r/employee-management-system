import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './home.jsx'
import AllEmployees from './Employees.jsx'
import Login from './Login.jsx'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/employee/login' element={<Login />} />
        <Route exact path='/employee/all' element={<AllEmployees/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
