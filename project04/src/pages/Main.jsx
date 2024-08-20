import React from 'react'
import {Link} from 'react-router-dom'

const Main = () => {

    /*
    Link 태그
        - 웹 페이지에서는 원래 페이지 이동 시 a태그를 사용
        - a태그는 클릭 시 다른 페이지로 새로 이동하기 떄문에 SPA인 React에 적합 X
        - Link 컴포넌트 사용! => 생김새 a태그, History API를 통해
            브라우저 주소의 경로만 바꿔주는 기능

        1) import {Link} from 'react-router-dom'
        2) <Link to="경로명">링크텍스트</Link>
    */

    
  return (
    <div>
        Main
        <hr />
        <Link to = '/about'>AboutPage</Link>
    </div>
  )
}

export default Main