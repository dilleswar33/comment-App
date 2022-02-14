import React, { useState } from 'react';
import {
  Link
} from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function SignIn() {

  const [user, setUser] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate();
  const handleChange = (e) => {
    const {name , value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
    

  }
  

  const handleSignIn = async (e) => {
    
    e.preventDefault();
   
    
    const {email,password} = user;
    
    
      await axios.post("http://localhost:4000/api/auth/signin",user)
      .then(res => {
        localStorage.setItem('userId',res.data.user)
        alert(res.data.message)
        res.data.user ? navigate('/comment') : console.log("hugdchdgwc")
        
        });
      // .then(res => {res.data.message ? setTest(true) : setTest(false)});


      
     }


  return (

    <>

      <div className="card text-center my-5 mx-auto" style={{width: "40%",backgroundColor:"#2d181814"}}>
        <h2 className='my-5'>Sign In</h2>
        <h6>Don't have an account yet? <Link to="/signup" className="card-link">SignUp</Link>
        </h6>
        <div className="card-body my-4">
          <form onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
              name="email"  value={user.email} onChange={handleChange} />
              </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
              name="password" value={user.password} onChange={handleChange} />
            </div>

            <div className='text-right '>
            <Link to="/forgotPassword" className="card-link">Forgot Your Password?</Link>
            </div>
            
            <button type="submit" className="btn btn-primary">Sign In</button>
          </form>

        </div>
      </div>

    </>

  );
}

export default SignIn