import React, { useEffect, useState } from 'react'
import GoodsItem from '../components/GoodsItem'
import axios from '../axios'

const GoodsList = ({goods, setGoods}) => {


  useEffect(() => {
    axios.get('/goods.json')
    .then(res => {
      // console.log(res.data.goods_list)
      setGoods(res.data.goods_list)
    })
  }, [])
  return (
    <div className="goods-list">
        {goods.map(item => <GoodsItem key = {item.id} item = {item}/>)}
    </div>
)
}

export default GoodsList