import { Card, Image } from 'antd'
import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.userEmail;
  const products = JSON.parse(localStorage.getItem(email));
  const product = products.products;
  console.log(product)
  return (
    <div className='pb-24'>
    <div className='text-center '>
      <h1 className='text-4xl bg-orange-100 py-5 font-bold tracking-tight text-gray-900 sm:text-6xl'>My Prodcuts</h1>
    </div>
    <div className='flex  mt-10 justify-center flex-wrap item-center gap-10'>
     {email ? product.map((p) => <Card key={Math.random()} className=' w-96 h-96  drop-shadow-2xl' >
        <Image src={p.image} className='h-[200] w-[220]'/>
        <h1>{p.title}</h1>
        <h1>{p.price}</h1>
        <h1>{p.brand}</h1>
        <button className='bg-orange-600 hover:bg-orange-400 text-white text-[12px] font-extrabold  px-3 py-2 rounded-50%'>See details</button>
      </Card>) : <Card>
        <h1>Prodcuts are not available</h1></Card>}
    </div>

    </div>
  )
}

export default Dashboard