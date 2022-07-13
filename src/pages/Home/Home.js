import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../redux/post/post'
import './Home.scss'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {TailSpin } from  'react-loader-spinner'



const Home = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const postdata =useSelector((state)=>state.post.posts)
  const loading =useSelector((state)=>state.post.loading)


 

    useEffect(()=>{
        dispatch(getPosts('news')).then(()=>{
          console.log(postdata)
        })
    },[])

    const calculateDiff=(date)=>{
      return moment(date).fromNow()
    }

    const historypush=(item)=>{
      navigate('/post',{state:item});
    }

  return (
    <div className='container pt-10'>
      <div className='innercontainer d-flex flex-column align-items-center'>
        <h3 className='title py-3'>STORIES</h3>

        {   
        
        loading ?
            <TailSpin   
             height="80"
            width="80"
            color='#5181cf'
            ariaLabel='loading'/>

             :
          postdata?.map((item,index)=>(
         
             
            <div key={index} className="d-flex flex-column align-items-center story" onClick={()=>{historypush(item)}}>
                 <h4 className='pl-3 pt-4'>{item.title}</h4>

                <div className='details d-flex align-items-center pl-3 mt-5 mb-2'>
                  <p>Points: {item.points}<span className='mx-3'>|</span>Posted: {calculateDiff(item.created_at)}<span className='mx-3'>|</span>Comments: {item.num_comments} </p>
                </div>
            
            </div>


          ))
        }

      </div>
    </div>
  )
}

export default Home