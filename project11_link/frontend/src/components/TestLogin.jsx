import React, { useState } from 'react'
import instance from '../axios'
import { useNavigate } from 'react-router-dom'

const TestLogin = ({setUser}) => {

    const [id, setId] = useState()
    const [pw, setPw] = useState()
    const nav = useNavigate()


    const handleLogin = async (e) => {
        e.preventDefault()
        console.log(id,pw)

        try {
            const res = await instance.post('/getLoginData', { id: id, pw: pw })
            console.log(res.data)
            if (res.data.result == 'success') {
                setUser(res.data.id)
                window.alert('성공!')
                nav('/')
            } else {
                window.alert('실패..')
            }
        } catch (err) {
            console.error(err)
        }

    }

  return (
    <div>
        <hr />
        <h3>로그인</h3>
        <form onSubmit={handleLogin}>
            ID : <input type="text"
                onChange={e => setId(e.target.value)} />
            <br />
            PW : <input type="password" 
                onChange={e => setPw(e.target.value)}/>
            <br />
            <input type="submit" value="로그인" />
        </form>
    </div>
  )
}

export default TestLogin