import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const GoodsDetail = () => {

  // 이 detail 페이지의 상품 정보를 저장하는 state 정의 
  // state 명 : product 

  const [product, setProduct] = useState()

  // GoodsItem 에서 넘겨받은 상품 id를 파라미터를 통해 저장하는 변수를 정의
  // useParams 사용 
  const { num } = useParams()
  console.log('params', num)

  const getData = async () => {
    let res = await axios.get('/goods.json')
    console.log('res', res.data.goods_list.filter(item => item.id == num)[0])

    setProduct(res.data.goods_list.filter(item => item.id == num)[0])

    // 받아온 상품 정보 중, 내가 파라미터를 통해 넘겨받은 변수와 
    // 고유 숫자가 같은 상품정보를 product 에 저장 
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className='goods-detail-box'>
      {/* product에 상품정보가 있다면 속성에 접근 (선택) */}
      {product && <>
        <div className='goods-detail-box-thumb'>
          <img src={product.main_thumb}></img>
        </div>

        <div className='goods-detail-box-info'>
          <div className='goods-detail-title'>
            <div className='goods-icon'>

              {product.new ?
                <em className='goods-new'>new</em>
                : product.best ?
                  <em className='goods-best'>best</em>
                  : ""
              }

              {/* 해당 상품이 new인지 best인지 조건부 렌더링으로 출력 */}
            </div>
            <p className='goods-detail-name'>{product.name}</p>
            <p className='goods-detail-txt'>{product.detail.txt}</p>
            <div className='goods-detail-price-box'>
              <strong>{product.price}</strong>
              <span>원</span>
            </div>
          </div>
          <div className='goods-detail-summary'>{product.detail.summary}</div>
        </div>
      </>}


    </div>
  )
}

export default GoodsDetail