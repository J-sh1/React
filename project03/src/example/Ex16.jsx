import React, { useEffect, useState } from 'react'

const Ex16 = () => {

    const pos = ['왼쪽', '정면', '오른쪽']
    const [result, setResult] = useState('게임 시작 전')
    const [my, setMy] = useState(pos[0])
    const [com, setCom] = useState(pos[0])
    const [round, setRound] = useState(1)
    
    const random1 = () => {
        return pos[parseInt(Math.random() * pos.length)]
    }

    const posRandom = (e) => {
        // console.log(e.target.innerText)
        // console.log(random1)
        setRound(round + 1)
        setMy(e.target.innerText)
        setCom(random1)
    }

    useEffect(() => {
        if (round > 1) {
            if (my === com) {
                setResult('승리')
            } else  {
                setResult('패배')
            } 
        }0
    }, [round])

    return (
        <div>
            <h1>참참참</h1>
            <p>나의 선택 : {my}</p>
            <p>상대의 고개 : {com}</p>
            <b>{result}</b>
            <hr />
            {pos.map(item => 
            <button key = {item} onClick={posRandom}>{item}</button>)}
        </div>
    )
}

export default Ex16