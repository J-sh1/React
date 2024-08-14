import React, { useRef } from 'react'
import '../css/ex12.css'

const Ex12 = () => {

    const divRef = useRef()

    const changeSize = (num) => {
        divRef.current.style.width = `${num}px`
        divRef.current.style.height = `${num}px`
    }

    const ckBtn = (e) => {
        // console.log(divRef.current)
        // console.log(e.target.innerText)
        if (e.target.innerText == '작게'){
            changeSize(100)
        } else if (e.target.innerText == '원본'){
            changeSize(200)
        } else if (e.target.innerText == '크게') {
            changeSize(300)
        }
    }

  return (
    <div className='container'>
        <button onClick={ckBtn}>작게</button>
        <button onClick={ckBtn}>원본</button>
        <button onClick={ckBtn}>크게</button>

        <div className="square" ref={divRef}></div>
    </div>
  )
}

export default Ex12