
import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { getPosts } from '../../redux/post/post'
import './Navbar.scss'

const Navbar = () => {
  const [query,setQuery]=useState('')
  const dispatch=useDispatch()
 
  const getQuerylist=()=>{
     dispatch(getPosts(query))
  } 

  return (
    <div className='d-flex align-items-center navbarcontainer'>
        <h1>HACKERNEWS</h1>
        <div className='d-flex align-items-center inputcontainer'>
        <input type="text" name="search" className='input text-center' value={query} onChange={(e)=>setQuery(e.target.value)} />
        <i className='fa fa-search  pl-2 search' onClick={getQuerylist}></i>
        </div>
    </div>
  )
}

export default Navbar