import React, { useState } from 'react'
import Footer from '../components/Ex09/Footer'
import Content from '../components/Ex09/Content'
import Header from '../components/Ex09/Header'
import '../css/ex09.css'
import {ModeContext} from '../context/ModeContext'

const Ex09 = () => {

    /*
    다크모드와 라이트모드를 만들어보자!

    1. 다크모드와 라이트모드를 구분하는 isDark 라는 stage 선언(true / false)
        - isDark true라면 다크모드 / false 라면 라이트모드

    2. isDark를 전역적으로 사용하기 위해서 context 세팅
        2.1. ModeContext 라는 파일 생성 -> create
        2.2. Ex09에서 Context를 사용할 수 있도록 감싼 후 Provider 생성
        2.3. isDark, setIsDark를 Provider로 전달

    3. '다크모드' 라는 버튼을 클릭 했을 때, Header, Content, Footer의 
        backgroundColor를 black으로, color를 white로 변경
        => 삼항 연산자
    
    4. '다크모드' 라는 버튼을 클릭했을 때 버튼의 글자가 '라이트모드'로 변경

    5. '라이트모드' 라는 버튼을 클릭했을 때 다시 원래대로 변경, 버튼도 '다크모드'로 변경
    */
    const [isDark, setIsDark] = useState(true)
    
  return (
    <ModeContext.Provider value = {{isDark, setIsDark}}>
        <div className='page'>
            <Header />
            <Content />
            <Footer />
        </div>
    </ModeContext.Provider>
  )
}

export default Ex09