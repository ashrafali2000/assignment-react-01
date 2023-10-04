import Card from 'antd/es/card/Card'
import { Image } from 'antd'
import React from 'react'
import { useParams } from 'react-router-dom'
import Products from "../allProducts/allProducts.json"

const SingleCard = ({}) => {
  const params = useParams();
  const {porductID} = params;
  const singleProduct = Products.find(((item) => item.id === +porductID));
  


  return (
    <Card className="myCardCls" >
     <Image src={singleProduct.images[1]} className='myCardImg'></Image>
       <p>{singleProduct.title}</p>
       <p>{singleProduct.category}</p> 
      
    </Card>
  )
}

export default SingleCard