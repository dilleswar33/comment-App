import React, { useState } from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";

function ForgotPassword() {
  const [user, setUser] = useState({
    email:"",
    secretCode:""
  })
  const [getPassword, setGetPassword] = useState()
  const [pass, setPass] = useState("")
  const [mess, setMess] = useState("")
  const handleChange = (e) => {
    const {name , value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
    // console.log(user)

  }

  const handlePassword = (e) => {
    e.preventDefault();
    const {email,secretCode} = user;
    
    axios.post("http://localhost:4000/api/auth/forgotPassword",user)
        .then(res => {if(res.data.password){
          setGetPassword(true);
          setPass(res.data.password);
          setMess(res.data.message);

        }  else {
          setGetPassword(false);
          setMess(res.data.message);
        }});
  

  }
  return (
    <div className="card text-center my-5 mx-auto" style={{width: "40%",backgroundColor:"#2d181814"}}>
        <h2 className='my-4'>Forgot Password</h2>
      
        <div className="card-body my-3">
          <form onSubmit={handlePassword}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"
              name="email" value={user.email} onChange={handleChange} />
              </div>
              <div className="form-group">
            <label htmlFor="code">Secret Code</label>
            <input type="text" className="form-control" id="code" placeholder="Code"
            name="secretCode" value={user.secretCode} onChange={handleChange} />
          </div>

            <div className='text-right '>
            
            </div>
            
            <button type="submit" className="btn btn-primary">Get My Password</button>
          </form>


        </div>
        {
          getPassword ? <p>Your Password is <strong className='text-success'>{pass}</strong> <br/>
          <span className='text-muted'>Dont't Share it with AnyOne</span> <br/> 
          <Link to="/signIn" className="text-primary">SignIn</Link>    </p> : 
          <p className='text-danger'>{mess} <br/>
                    </p> 
        }

      </div>
  )
}

export default ForgotPassword