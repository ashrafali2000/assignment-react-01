import Card from 'antd/es/card/Card'
import React from 'react'

const Cards = ({item, title, category, description}) => {
  return (
    <Card>
        {title}
        {category}
     <p> {description}</p>  
    </Card>
  )
}

export default Cards