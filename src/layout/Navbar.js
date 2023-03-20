import React from 'react'
import { Link } from "react-router-dom";
import img1 from "../images/kdu.png";

import './btncss.css';

export default function Navbar() {
  return (
    <div>
   <nav className="navbar navbar-expand-lg navbar-dark bg-info">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src={img1} mx-2 width="30" height="24" className="d-inline-block align-text-top  " /> Student Management System</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <Link className='btn btn-outline-light me-md-2' to="/addstudent">Add Student</Link>
    <Link className='btn btn-outline-light' to="/">Back</Link>
    
  </div>
</nav>




    </div>
  )
}
