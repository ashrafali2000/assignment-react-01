import React from 'react'
import "./index.css"
import { Link } from 'react-router-dom'
const SeeDetailBtn = ({itemId}) => {
  return (
   <p style={{marginTop:10}}><Link className='SeeDetailBtn' to={`singleProductPage/${itemId}`}>See Details</Link></p> 
  )
}

export default SeeDetailBtn