import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import Board from '../components/Board_p';
import '../css/ex04.css'

const Ex04_p = () => {

    const [result, setResult] = useState('게임 시작 전')
    const [my, setMy] = useState(1)
    const [com, setCom] = useState(1)
    const [round, setRound] = useState(1)

    /** 주사위 게임을 해보자! 
     *  1. 유저는 던지기 버튼을 누른다. => throwDice 라는 함수를 실행시킨다. 
     *  2. 던지기 버튼을 눌렀을 때, 나의 숫자 (myDice) 도 랜덤으로 1~6까지 중 하나 
     *      컴퓨터의 숫자 (comDice) 도 랜덤으로 1~6까지 중 하나 
     *  3. Ex04 상위컴포넌트에서 Board 라는 하위 컴포넌트로 값을 전송 
     *      (나 - 컴퓨터 / 각각 두개가 가진 숫자를 전달 )
     *  4. 나온 숫자에 따라서 주사위 모양을 다르게 세팅 
     *  5. 나 < 컴퓨터, 나 == 컴퓨터 : 패배 
     *     나 > 컴퓨터 : 승리 
     *      if 문 사용하지 말고 아까처럼 return 문 안에서 삼항연산자로 처리 
     *  6. 유저가 RESET 버튼을 누른다 => resetDice 라는 함수를 실행시킨다
     *  7. RESET 버튼을 눌렀을 때, 내 주사위 1 / 컴퓨터 주사위 1 세팅 
     */

    const makeRandom = ()=>{
        return parseInt(Math.random() * 6) + 1
    }

    const throwDice = ()=>{
        setMy(makeRandom)
        setCom(makeRandom)
        setRound(round + 1)
    }
    const resetDice = ()=>{
        setMy(1)
        setCom(1)
    }

    useEffect(() => {
        if (round > 1){
            if (my > com) {
                setResult('승리')
            } else if (my < com) {
                setResult('패배')
            } else {
                setResult('무승부')
            }
        }
    }, [throwDice])

  return (
    <div className='box'>
        <h1>주사위게임</h1>

        <div>
            <Button variant="secondary" onClick={throwDice}>던지기</Button> {" "}
            <Button variant="danger" onClick={resetDice}>RESET</Button>
        </div>
        
        <div className='board-container'>
            <Board res = {my} name = {'나'} />
            <Board res = {com} name = {'컴퓨터'} />
        </div>


        <h2>{result}</h2>

    </div>
  )
}

export default Ex04_p