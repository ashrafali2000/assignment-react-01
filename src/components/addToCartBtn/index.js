import React from 'react'
import "./index.css"
const AddToCartBtn = ({showShopingHandler}) => { 

  return (
    <button className='AddToCartBtn' onClick={showShopingHandler}>Add To Card</button>
  )
}

export default AddToCartBtn;