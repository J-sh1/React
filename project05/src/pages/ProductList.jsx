import React from 'react'
import ProductItem from '../components/ProductItem'

const ProductList = ({list}) => {
    // console.log('받아온 리스트',list)
  return (
    <div className='list-container'>
        {list.map(item => <ProductItem key = {item.no} item = {item}/>)}
    </div>
  )
}

export default ProductList