import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import Board from '../components/Board'
import '../css/ex04.css'

const Ex04 = () => {

    /*
    주사위 게임을 해보자!
    1. 유저는 던지기 버튼을 누른다. => throwDice 라는 함수를 실행 시킨다.
    2. 던지기 버튼을 눌렀을 때, 나의 숫자(myDice)도 랜덤으로 1~6까지중 하나
        컴퓨터의 숫자(comDice) 도 랜덤으로 1~6까지중 하나
    3. Ex04 상위컴포넌트에서 Board 라는 하위 컴포넌트로 값을 전송
        (나- 컴퓨터 / 각각 두개가 가진 숫자를 전달)
    4. 나온 숫자에 따라서 주사위 모양을 다르게 세팅
    5. 나 < 컴퓨터, 나 == 컴퓨터 : 패배
        나 > 컴퓨터 : 승리
        if문 사용하지 말고 아까처럼 return 문 안에서 삼항연산자로 처리
    6. 유저가 RESET 버튼을 누른다 => resetDice 라는 함수르 실행시킨다
    7. RESET 버튼을 눌렀을 때, 내 주사위 1 / 컴퓨터 주사위 1 세팅
    */

    const [myDice, setmyDice] = useState(1)
    const [comDice, setComDice] = useState(1)

    /** 랜덤 주사위 뽑기 함수 */
    const throwDice = (e) => {
        console.log(parseInt(Math.random() * 6) + 1)
        setmyDice(parseInt(Math.random() * 6) + 1)
        setComDice(parseInt(Math.random() * 6) + 1)
    }
    /** 주사위 리셋 함수 */
    const resetDice = (e) => {
        setmyDice(1)
        setComDice(1)
    }

  return ( 
    <div className='box'>
        <h1>주사위게임</h1>
        <div>
            <Button onClick={throwDice} variant='secondary'>던지기</Button>{" "}
            <Button onClick={resetDice} variant='danger'>Reset</Button>
        </div>
        <div className='board-container'>
            <Board res = {myDice} nick = "나" />
            <Board res = {comDice} nick = "컴퓨터"/>
        </div>
        { myDice > comDice 
            ? <h4>승리</h4>
            : <h4>패배</h4>
        }
    </div>
  )
}

export default Ex04