import Card from 'antd/es/card/Card'
import React from 'react'
import "./Card.css"
import { Image } from 'antd'
import AddToCartBtn from '../../components/addToCartBtn'

const Cards = ({item,img, title, category, description}) => {
  return (
    <Card className="myCardCls" >
     <Image src={img} className='myCardImg'></Image>
       <p>{title}</p>
       <p>{category}</p> 
       <AddToCartBtn />
    </Card>
  )
}

export default Cards