import React from 'react'
import { ApiTopPropduct } from '../api/TopProductApi'
import Product from '../components/Product'
function Products() {
  return (
    <div className='flex flex-wrap p-5'>
        {ApiTopPropduct.map((product,index) =>(
            <Product item={product} key={index}/>
        ))}
    </div>
  )
}

export default Products