import React,{useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

function SignUp() {
  const [user, setUser] = useState({
    email:"",
    password:"",
    secretCode:""
  })
  const [click, setClick] = useState(false)
  // const [test, setTest] = useState(false)

  const handleChange = (e) => {
    const {name , value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
   

  }

  const handleSignUp =(e) => {
    e.preventDefault();
    
    const {email,password,secretCode} = user;

    if(email && password && secretCode) {
      axios.post("http://localhost:4000/api/auth/signup",user)
      .then(setClick(true))
      
        // .then(res => {res.data.message ? setTest(true) : setTest(false)});
    }
    else {
      alert("Fields Should not be empty")
    }
    
      
      
    
    
  }


  return (
    <>

    <div className="card text-center my-5 mx-auto" style={{width: "40%",backgroundColor:"#2d181814"}}>
      <h2 className='my-5'>Sign Up</h2>
      <h6>Already have an account? <Link to="/signIn" className="card-link">SignIn</Link>
      </h6>
      <div className="card-body my-4">
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1"
             aria-describedby="emailHelp" placeholder="Enter email"
             name="email" value={user.email} onChange={handleChange} required/>
            </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"
            name="password" value={user.password} onChange={handleChange} required/>
          </div>

          <div className="form-group">
            <label htmlFor="code">Secret Code</label>
            <input type="text" className="form-control" id="code" placeholder="Code"
            name="secretCode" value={user.secretCode} onChange={handleChange} required/>
          </div>

          
          <button type="submit" className="btn btn-primary" onClick={handleSignUp}>Sign Up</button>
          <div className='text-muted my-2'>
          <small>By Clicking the "Sign Up" button,you are creating an account and you agree to the Terms of use</small>
          </div>
        </form>

        {
          click ? <div className='text-success'>Succesfully Registered <br/> <Link to="/signIn" className="card-link">SignIn</Link></div>  : <p></p>
        }
        

      </div>
    </div>

  </>
  )
}

export default SignUp