import React from 'react'
import Products from "./allProducts.json"
import Cards from './Cards'
import "./index.css"
import { Link } from 'react-router-dom'
const AllProducts = () => {
  const allProducts = Products.map((item) => <Cards key={item.id} 
  item = {item.id} title ={item.title} img ={item.images[1]} category = {item.category} description = {item.description} /> )
  return (
    <div>
    <nav className='categoriesCls'><Link>Phones</Link><Link>LapToop</Link>
    <Link>Food</Link><Link>Perfume</Link><Link>Home-decoration</Link></nav>
      <div className='allCardCls'>
     {allProducts}
      </div>

    </div>
  )
}

export default AllProducts