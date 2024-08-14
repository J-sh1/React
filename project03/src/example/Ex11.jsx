import React, { useRef } from 'react'

const Ex11 = () => {

    /*
    useRef
    - 리액트 훅의 한 종류로, Ref는 reference (참조)의 줄임말
    - 바닐라 script에서 특정 DOM 요소에 접근한 것처럼, React에서도 DOM 요소 접근 가능
    - state와 비슷하게 저장공간으로 쓰이지만 변경 시 렌더링을 발생시키면 안되는 경우 사용
    - 장점 : state처럼 변경될 때마다 재렌더링을 일으키지 않기 때문에 성능 향상 도움
    - 대표적으로 쓰이는 예시 :input태그 focusing 하는 경우

    [사용방법]
    1. import 하기
    
    2. 초기값 할당
        const 이름 = useRef()
    
    3. 참조할 요소에 ref 연결
        <input ref = {이름} />

    4. 이름.current <- 요소 반환
        - 마치 바닐라script 에서 document.getElementBy~ <- 처럼 사용 가능        
    */

    const nameFocus = useRef()

    const handleReset = () => {
        // console.log(nameFocus.current)
        nameFocus.current.value = ''
        nameFocus.current.focus()
    }

  return (
    <div>
        <h1>useRef</h1>
        <input type="text" ref={nameFocus}/>
        <button onClick={handleReset}>RESET</button>
        <hr />
    </div>
  )
}

export default Ex11