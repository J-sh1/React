import React, { useState } from 'react'
import instance from '../axios'
import TestLogin from './TestLogin'

const Test = () => {

    const [data, setData] = useState()
    const [id, setId] = useState()
    const [pw, setPw] = useState()

    const sendData = async (e) => {
        e.preventDefault()
        console.log('Data', data)

        // try/catch : 예외처리, 에러가 발생할 가능성이 있는 부분을 try-catch
        try {
            const res = await instance.post('/getData', { id: id, pw: pw, data: data })
            console.log('res', res.data.result)
            if (res.data.result === 'success') {
                window.alert('성공!')
            } else {
                window.alert('실패..')
            }
        } catch (err) {
            console.error(err)
        }

    }
    return (
        <div>
            <form onSubmit={sendData}>

                id : <input type='text' onChange={e => setId(e.target.value)}></input><br />
                pw : <input type='password' onChange={e => setPw(e.target.value)}></input><br />
                user_name : <input type='text'
                    onChange={(e) => { setData(e.target.value) }}></input><br />
                <input type='submit'></input>
            </form>

        </div>
    )
}

export default Test