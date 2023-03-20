import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img2 from "../images/kdubg.jpg";

export default function AddUser() {

    let navgate=useNavigate()
 
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        regno:""
    })
   
    const {name,username,email,regno}=user;

    const onInputChange=(e)=>{

        setUser({...user, [e.target.name]:e.target.value});
    
    };

    const onSubmit=async(e)=>{
      e.preventDefault();
      await axios.post("http://localhost:8081/user",user)
      navgate("/")
    }

  return (
    
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <h2 className="text-center m-4">Register User</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                    <label htmlFor="Name" className="form-label">Name</label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Enter the Name"
                    name="name"
                    value={name}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Username" className="form-label">Username</label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Enter the Username"
                    name="username"
                    value={username}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Enter the Email"
                    name="email"
                    value={email}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="Regno" className="form-label">Reg-No</label>
                    <input 
                    type={"text"}
                    className="form-control"
                    placeholder="Enter Register Number"
                    name="regno"
                    value={regno}
                    onChange={(e)=>onInputChange(e)}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">Submit</button>
                <Link type="cancel" className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
                </form>
            </div>
        </div>
        </div>
        
   
  );
}
