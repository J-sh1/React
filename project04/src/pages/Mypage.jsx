import React from 'react'
import { Link } from 'react-router-dom'

const Mypage = () => {
  return (
    <div>
        Mypage
        <hr />
        <h3>내가 쓴 글</h3>
        <div>
            <Link to = '/product/1'>
                <p>[1] 캠핑용품 거래하실 분</p>
            </Link>
            <Link to = '/product/2?best=true&new=true'>
                <p>[2] 정보처리기사 스터디 하실 분</p>
            </Link>
            <Link to = '/product/3'>
                <p>[3] 이 공모전 괜찮나요?</p>
            </Link>
        </div>
    </div>
  )
}

export default Mypage