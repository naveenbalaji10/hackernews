import React from 'react'
import './Postdetail.scss'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react';
import moment from 'moment'


const Postdetail = () => {
const location=useLocation();
const {state}=location

const calculateDiff=(date)=>{
  return moment(date).fromNow()
}

useEffect(()=>{
 console.log(state)
},[state])

  return (
    <div className='outercontainer d-flex align-items-center justify-content-center'>
      <div className='postcontainer d-flex flex-column pt-3 pl-3'>
        <h2>{state.title}</h2>
        {
          state.story_text &&
          <p className='storytext'>{state.story_text}</p>
        }
        <p className='author pt-5'>Author: {state.author}</p>
        <p>Points: {state.points}<span className='mx-3'>|</span>Posted: {calculateDiff(state.created_at)}<span className='mx-3'>|</span>Comments: {state.num_comments} </p>
      </div>
    </div>
  )
}

export default Postdetail