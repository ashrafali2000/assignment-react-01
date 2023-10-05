import Card from 'antd/es/card/Card'
import { Image } from 'antd'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from "../allProducts/allProducts.json"
import "./index.css"
import AddToCartBtn from '../../components/addToCartBtn'
import ShoppingCart from '../../components/shopingCart'

const SingleCard = () => {
  const [showShoping, setShowShoping] = useState(false);

  const showShopingHandler = () => {
    setShowShoping(true);
  }
  const hideShopingHandler = () => {
    setShowShoping(false);
  }
  const params = useParams();
  const {porductID} = params;
  const singleProduct = Products.find(((item) => item.id === +porductID));
  
  return (
    <div>

    <div className="singleCardDetails" >

  <Card className='singleAddToCardDetailsChild'>
    <Image src={singleProduct.images[1]} className='singleAddToCardImg' />
    <p>{singleProduct.title}</p>
       <p>{singleProduct.category}</p> 
      <AddToCartBtn showShopingHandler = {showShopingHandler} />
     {showShoping ? <ShoppingCart hideShopingHandler ={hideShopingHandler}></ShoppingCart>:""}

  </Card> 
    </div>
   <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:20}}><h1 className='ourViews'> Product Our Views</h1></div> 
  <div className='imagesInDetails'>
     {singleProduct.images.map((p) =><Card key={Math.random()}className='singleCardDetailsChild'><Image src={p} className='singleCardImg' />
     </Card>)}</div>
    </div>
  )
}

export default SingleCard