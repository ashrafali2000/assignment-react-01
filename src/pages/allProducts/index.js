import React from 'react'
import Products from "./allProducts.json"
import Cards from './Cards'
const AllProducts = () => {
  const allProducts = Products.map((item) => <Cards key={item.id} 
  item = {item.id} title ={item.title} category = {item.category} description = {item.description} /> )
  return (
    <div>
    
      <div>
     {allProducts}
      </div>
    </div>
  )
}

export default AllProducts