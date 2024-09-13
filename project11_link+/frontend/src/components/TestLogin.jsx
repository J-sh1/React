import React, { useState } from 'react'
import instance from '../axios'

const TestLogin = () => {

    const [id, setId] = useState()
    const [pw, setPw] = useState()

    const sendData = async (e) => {
        e.preventDefault()
        const res = await instance.post('/handleLogin', {
            id : id,
            pw : pw
        })
        console.log(res)
        if (res.data.result === 'success') {
            alert(`${res.data.username}님 환영합니다`)
            let obj = {auth : 'user', id : res.data.id}
            sessionStorage.setItem('info', JSON.stringify(obj))
            window.location.href = '/'
        } 
    }

  return (
    <div>
        <h4>로그인</h4>
        <form onClick={sendData}>
            ID : <input type="text" onChange={(e) => {setId(e.target.value)}} /> <br />
            PW : <input type="password" onChange={(e) => {setPw(e.target.value)}} /> <br />
            <input type="submit" value="로그인" />
        </form>
    </div>
  )
}

export default TestLogin