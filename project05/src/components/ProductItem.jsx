import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductItem = ({item}) => {

  const nav = useNavigate()
  
  return (
    <div className="product-container"  onClick = {() => {
      nav(`/detail/${item.no}`)
    }}>
        <img src={item.src} width='200px'/>
        <p>{item.title}</p>
        <p>{item.price}원</p>
    </div>
    )
}

export default ProductItem