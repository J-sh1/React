import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({auth, setAuth}) => {
    console.log(auth)
  return (
    <div className="header-box">
        <div className="heder-box-logo">  
            {<Link to = '/'><img src="https://cdn.bonif.co.kr/resources/web/css/images/logo_gnb.png" alt="" /> </Link>}
        </div>
        <div className="header-box-nav">
            <ul className='header-box-nav-list'>
                {/* 각 메뉴 클릭 시, 메인은 /, 메뉴소개는 /menu/list로 이동 */}
                <li>메인</li>
                <li>메뉴소개</li>
            </ul>
        </div>
        <div className="header-box-util">
            {/* auto에 따라서 다르게 보여지게 만들 것 
                - auto가  true : 로그아웃 / flase : 로그인
                - 해당 버튼을 누르면 handleLogin 이라는 함수
                - heandleLogin 이 하는 일 -> auth 토글 + 메인창 이동
                    로그인 눌렀을 때 -> 로그인 창 이동
            */}
            {auth
            ? <button onClick={()=> {
                setAuth(!auth) }}>
                    로그아웃
                </button>
            : <button onClick={()=> {
                setAuth(!auth)}}>로그인
            </button>}

        </div>
    </div>
  )
}

export default Header