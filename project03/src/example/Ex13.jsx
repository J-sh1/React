import React, { useRef } from 'react'

const Ex13 = () => {

    const pdfRef = useRef()

    /** 페이지변경함수(pdf번호) */
    const change = (num) => {
        pdfRef.current.src = `http://localhost:3000/pdf/pdfFile${num}.pdf`
    }

    const changePdf = () => {
        console.log(pdfRef.current.src)
 
        if(pdfRef.current.src === 'http://localhost:3000/pdf/pdfFile1.pdf'){
            change(2)
        } else if (pdfRef.current.src === 'http://localhost:3000/pdf/pdfFile2.pdf') {
            change(1)
        }
    }
  return (
    <div style={{height : '100vh'}}>
        <button onClick={changePdf}>pdf변경하기</button>
        <iframe
            ref={pdfRef} 
            src='/pdf/pdfFile1.pdf'
            width='100%'
            height='90%'>
        </iframe>
    </div>
  )
}

export default Ex13