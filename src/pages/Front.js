import React from 'react'
import "./Card.css"

import "./Card.css";
import img2 from "../images/EVNR0218.jpg";
import img3 from "../images/addstdd.jpg";
import img4 from "../images/view.jpg";

import { Link } from 'react-router-dom';



export default function Front({title,imageurl,body}) {
  return (
    <div className='py-3'>
      <h1>Main Menue</h1>
      <div className='container py-3 bg-gradient-primary'></div>
    <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col">
    <div className="card border-primary md-3 h-50">
     
      <img className="card-img-top rounded mx-auto d block" src={img2}  alt="..." />
      <div className="card-body">
       <Link to="/home" className='btn btn-primary'>Home</Link>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card border-primary md-3 h-50">
      <img className="card-img-top rounded mx-auto d block" src={img3}  height="350px" width="200px" alt="..." />
      <div className="card-body">
      <Link to="/addstudent" className='btn btn-primary'>Add Student</Link> 
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card border-primary md-3 h-50">
      <img className="card-img-top rounded mx-auto d block" src={img4} height="350px" alt="..."/>
      <div className="card-body">
      <Link to="/viewuser/:id" className='btn btn-primary'>View Student</Link> 
        
        
      </div>
    </div>
  </div>
  
    </div>
    </div>
 

  )
}
