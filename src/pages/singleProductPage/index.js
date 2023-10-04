import React from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {
    const params = useParams();
    const {userName} = params;
  return (
    <div>SingleProductPage {userName}</div>
  )
}

export default SingleProductPage