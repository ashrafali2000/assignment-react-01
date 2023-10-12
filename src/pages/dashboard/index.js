import { Card, Image } from 'antd'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.userEmail;
  const products = JSON.parse(localStorage.getItem(email));
  const productImages = products.products;
  console.log(productImages)
  return (
    <div>
      <Card>
       {productImages.map(p => <Image key={Math.random()} src={p.brand}>
  
        </Image>)}
      </Card>
      
    </div>
  )
}

export default Dashboard