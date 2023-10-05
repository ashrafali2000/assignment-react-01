import React from 'react'
import "./index.css"
export const shopProdcuts = [];     
const AddToCartBtn = ({showShopingHandler,singleProduct}) => { 

  const addShopProductsHandler = () => {
    shopProdcuts.push(singleProduct);
  }
  return (
    <button className='AddToCartBtn' onClick={() => {
      showShopingHandler()
      addShopProductsHandler()
    } }>Add To Card</button>
  )
}

export default AddToCartBtn;