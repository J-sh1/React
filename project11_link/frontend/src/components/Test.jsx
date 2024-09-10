import React, { useState } from 'react'
import instance from '../axios'

const Test = () => {

    const [data, setData] = useState()
    const sendData = async (e) => {
        e.preventDefault()
        console.log(data)
        
        // try.catch : 예외처리, 에러가 발생할 가능성이 있는 부분을 try-catch 
        try {
                const res = await instance.post('/getData', {data : data})
                console.log(res.data.result)  
        } catch (err) {
            console.error(err)
        }
    }
  return (
    <div>
        <form onSubmit={sendData}>
            test : <input type="text" onChange={(e) => {setData(e.target.value)}}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Test