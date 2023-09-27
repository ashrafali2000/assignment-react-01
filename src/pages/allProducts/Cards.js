import Card from 'antd/es/card/Card'
import React from 'react'

const Cards = ({item, title, category, description}) => {
  return (
    <Card>
        {title}
        {category}
    </Card>
  )
}

export default Cards