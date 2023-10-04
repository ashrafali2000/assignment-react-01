import Card from 'antd/es/card/Card'
import { Image } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import Products from "../allProducts/allProducts.json"
import "./index.css"
import AddToCartBtn from '../../components/addToCartBtn'

const SingleCard = ({}) => {
  const params = useParams();
  const {porductID} = params;
  const singleProduct = Products.find(((item) => item.id === +porductID));
  


  return (
    <Card className="singleCardDetails" >
  <div className='imagesInDetails'>
     {singleProduct.images.map(p =><Image src={p} className='singleCardImg'></Image>)}</div>
       <p>{singleProduct.title}</p>
       <p>{singleProduct.category}</p> 
      <AddToCartBtn></AddToCartBtn>
    </Card>
  )
}

export default SingleCard