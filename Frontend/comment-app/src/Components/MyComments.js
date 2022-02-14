import React, { useEffect, useState } from 'react'
import CommentItem from './CommentItem'
import axios from 'axios';

function MyComments() {
  const [mess, setMess] = useState({})
  const [click, setClick] = useState(false)
  const [local, setLocal] = useState({
    userId:localStorage.getItem('userId')

  })
  

  useEffect(() => {
    axios.post("http://localhost:4000/api/auth/myComments",local)
      .then(res => setMess(res.data)
      );
  }, []);
  
  const handleFilter = (e) => {
    e.preventDefault();
    axios.get("http://localhost:4000/api/auth/allComments")
      .then(res => setMess(res.data));
    setClick(true);
  }

  return (
    <>
      <div className="card my-5 overflow-auto mx-auto" style={{ width: "75%", backgroundColor: "#2d181814" }}>
        <div className="card-body overflow-auto">
          <span className='text-muted'></span>
          <div >

            <button className='btn btn-primary float-right btn-block' onClick={handleFilter}>Filter</button>

          </div>

          <div className='container'>
            <strong>Comments</strong>
            <div>
              <div className="d-flex">
                <div className="mr-auto p-2"><strong>User</strong></div>

                <div className="p-2"><strong>Comment</strong></div>
              </div>



              {

                click ?  {} : Object.keys(mess).filter(key => (key !== '_id' && key !== 'comment')).map((key) => {
                  return (
                    <div className='float-left text-muted ' key={key}> <CommentItem email={mess[key]}></CommentItem></div>

                  )
                })
              }


              {

                click ? {}: Object.keys(mess).filter(key => (key !== '_id' && key !== 'email')).map((key) => {
                  return (
                    <div className='float-right text-muted' key={key}><CommentItem comment={mess[key]}></CommentItem></div>

                  )
                })
              }

            </div>


          </div>
        </div>

      </div>

    </>
  )
}

export default MyComments