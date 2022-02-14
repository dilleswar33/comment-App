import React, { useEffect, useState } from 'react'
import axios from 'axios';

function CommentItem(props) {
  const [mess, setMess] = useState({})
  const {email,comment} = props
  let com = []
  const [local, setLocal] = useState({
    userId:localStorage.getItem('userId')

  })
  
  useEffect(() => {
    axios.post("http://localhost:4000/api/auth/myComments",local)
    .then(res => setMess(res.data))
  }, [])
  
  return (
    <>
    <div className="card bg-light mb-3 my-5" style={{width: "100%"}}>
  <div className="card-body">
    
    <p className="card-text float-left text-muted">{email}</p>
    
      {
         <p className='float-right position-center position-sticky'> 
           {comment} 
          </p>
        }
        
     
      
    
  </div>
</div>
    
    </>
  )
}

export default CommentItem