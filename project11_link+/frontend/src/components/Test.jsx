import React, { useState } from 'react'
import instance from '../axios'

const Test = () => {
    
    const [id, setId] = useState()
    const [pw, setPw] = useState()
    const [userName, setUserName] = useState()

    const sendData = async (e) => {
        e.preventDefault()
        console.log('sendData', id, pw, userName)
        const res = await instance.post('/getData', {
            id : id,
            pw : pw,
            userName : userName
        })
        console.log(res)
        if (res.data.result === 'success') {
            alert('환영합니다')
        } else{
            alert('다시 시도해주세요...')
        }
    }

  return (
    <div>
        <form onSubmit={sendData}>
            ID : <input type="text" onChange={(e) => {setId(e.target.value)}}/><br/>
            PW : <input type="password" onChange={(e) => {setPw(e.target.value)}}/><br/>
            USER_NAME : <input type="text" onChange={(e) => {setUserName(e.target.value)}}/><br/>
            <input type="submit" value="데이터 전송" />
        </form>
    </div>
  )
}

export default Test