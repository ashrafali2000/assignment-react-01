import Card from 'antd/es/card/Card'
import React from 'react'
import "./Card.css"
import { Image } from 'antd'
import SeeDetailBtn from '../../components/seeDetailBtn'

const Cards = ({item,img, title, category, description}) => {
  return (
    <Card className="myCardCls" >
     <Image src={img} className='myCardImg'></Image>
       <p>{title}</p>
       <p>{category}</p> 

       <SeeDetailBtn />
    </Card>
  )
}

export default Cards