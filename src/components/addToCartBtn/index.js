import React from 'react'
import "./index.css"
export const shopProdcuts = [];     
const AddToCartBtn = ({showShopingHandler,singleProduct}) => { 

  const addShopProductsHandler = () => {
    const allShopProducts = shopProdcuts.find(i => i.id === +singleProduct.id );
    if(!allShopProducts){
      shopProdcuts.push(singleProduct);
    }
  }
  return (
    <button className='AddToCartBtn' onClick={() => {
      showShopingHandler()
      addShopProductsHandler()
    } }>Add To Card</button>
  )
}

export default AddToCartBtn;