import React from 'react'
import { Link } from 'react-router-dom'

const GoodsItem = ({item}) => {

    // console.log(item)

    return (
        <div className='goods-item' style={{ postiion: 'relative' }}>
            
            <div className="goods-item-icon">
                {/* 해당 상품이 new 상품, best 상품인지 조건부 렌더링을 출력 
                    삼항 연산자를 이중으로 사용*/}
                    {item.new ? <em className="goods-new">new</em> 
                    : item.best ? <em className="goods-best">best</em>
                    : <em></em>
                    }

            </div>
            <div className="goods-thumb">

                {/* 이미지 클릭 시, Link 컴포넌트를 통해 상세페이지
                    상세페이지 URL : /menu/상품id번호*/}
                <Link to = {`/menu/${item.id}`}>
                    <img src = {item.main_thumb} />
                </Link>


            </div>
            <div className="goods-name">
                <h4>{item.name}</h4>
                <p>
                    <span>{item.price}</span>원
                </p>
            </div>
        </div>
    )
}

export default GoodsItem