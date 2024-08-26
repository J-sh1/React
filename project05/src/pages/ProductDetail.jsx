import React from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductDetail = ({list}) => {
  let {no} = useParams()
  // console.log(no)
  let res = list.filter(item => item.no == no)[0]
  // console.log(res)
  return (
    <div className='list-container'>
      <h3>{res.title}</h3>
      <img  width = "200px" src={res.src} alt="" />
      <p>
        <span>가격 : {res.price}원</span>
        <br/>
        {res.delivery == 'free'
        ? <span>배송비 무료</span>
        : <span>배송비 : {res.delivery}원</span>}
      </p>

      <Link to = '/list'>목록으로 돌아가기</Link>
    </div>
  )
}

export default ProductDetail