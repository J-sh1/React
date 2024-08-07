import React, { useState } from 'react'

const Ex03 = () => {

    // 1. 버튼 클릭 시, 내가 누른 버튼의 숫자를 구해서 inputNum 안에 세팅하자
    // 2. 1번과 동시에 랜덤한 수를 뽑아주자 (범위 : 1 ~ 3) => ranNum
    // 3. 랜덤한 수와 누른 버튼의 수가 같다면 '정답입니다~' / 다르다면 '땡!' 을 출력
    //      (다만, if문 사용 X return 문 안에서 삼항연산자)

    const [ranNum, setRanNum] = useState()
    const [inputNum, setInputNum] = useState()

    const btnCk = (e) => {
        // 내가 발생시킨 이벤트의 대상이 궁금하다면?
        // 이벤트에 걸어놓은 함수 매개변수를 뜯어보면 된다!(e.target)
        // 이벤트 객체

        // console.log(e.target.innerText)
        setInputNum(e.target.innerText)
        setRanNum(parseInt(Math.random()*3)+1)
        // console.log(ranNum)
        // console.log(ranNum == inputNum ? '정답입니다~': '땡!')
    }



  return (
    <div>
        <button onClick={btnCk}>1</button>
        <button onClick={btnCk}>2</button>
        <button onClick={btnCk}>3</button>
        <div>
            <p>내가 선택한 숫자 : {inputNum}</p>
            <p>랜덤 숫자 : {ranNum}</p>
            <hr/>
            { ranNum == inputNum 
            ? <b>정답입니다.</b>
            : <b>땡!</b>
            }

        </div>
    </div>
  )
}

export default Ex03