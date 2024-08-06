import React from 'react'
import { useState } from 'react'

const Ex01 = () => {

    /*
    React Event
        1. onClick : camelCase 작성
        2. {함수이름}
        3. {() => {}} 가능
        4. HTML 요소에만 이벤트를 설정할 수 있다.
            - 내가 만든 컴포넌트에는 이벤트 설정 X
                ex) <MenuBox onClick={} /> (X)
                MenuBox라는 컴포넌트 안에 있는 <div></div>에 이벤트 설정(o)
    */

    /* 
    state : 컴포넌트 내부에서 변경이 가능한 데이터

        * 사용 방법
            1. useState 를 import **
                import {useState} from 'react'

            2. 선언
                const [state이름, set + State이름] = useState(초기화 값)
                ex) const [text, setText] = useState("기본 값")

            3. state 값을 변경하고 싶을 때는 setStage를 호출한다.
                예를 들어, text 안에 'Hello World' 를 넣고 싶다면?
                setText('Hello World')
    */


    let num1 = 0 // 변수 선언
    const [num2, setNum2] = useState(0) // state 선언
    

    /** 숫자를 1씩 증가시키는 함수 */
    const increase = () => {
        num1 += 1 // 변수로 값 증가
        // console.log('증가함수 실행', num1)
        setNum2(num2 + 1) // setate로 값 증가
    }
    const decrease = () => {
        if(num2 > 0){
            setNum2(num2 - 1)
        } else {
            alert('0이하는 안됨')
        }
    }
  return (
    <div>
        <p>{num2}</p>
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
}

export default Ex01