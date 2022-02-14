import React, { useEffect, useState } from 'react'
import MyComments from './MyComments'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Comment() {
  const [myComments, setMyComments] = useState({
    comment:"",
    userId:localStorage.getItem('userId')
  })

  const navigate = useNavigate();

  
 
  const [posted, setPosted] = useState(false)
  useEffect(() => {
    const userId = localStorage.getItem('userId');
  }, [])
  
  


  const handleChange = (e) => {
    
    const {name , value} = e.target;
    setMyComments({
      ...myComments,
      [name]:value
    })

  }

  let userId=localStorage.getItem('userId').toString();

  myComments.comment.concat(".")
  console.log(myComments.comment)

  const handlePostComment = (e) => {
   
     e.preventDefault();
     
      
    // console.log(myComments.comment);
       axios.post("http://localhost:4000/api/auth/comment",myComments)
       .then(res =>  setPosted(true));
       ;
    
    
  }

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate('/')


  }


  return (
      <>
      <div><button type="button" className="btn btn-info float-right my-2" onClick={handleLogout}>Logout</button></div> <br></br>
    <div className="card text-center my-4" style={{width: "70%",backgroundColor:"#2d181814"}}>
    <div className="form-group text-left">
    <label htmlFor="exampleFormControlTextarea1"><h6 className='mx-2 my-2'>Share Your Thougths with World </h6></label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"
                  name="comment" value={myComments.comment} onChange={handleChange}>

    </textarea>
  </div>
  <button type="button" className="btn btn-primary btn-sm" onClick={handlePostComment}>Post</button>
  </div>
  <div>

    {
      posted ? <p className='text-primary'>Successfully Posted </p> :<p></p>
    }
  
  
  </div>

  <MyComments />

  
  </>
    
  )
}

export default Comment