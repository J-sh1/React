import React, { useEffect, useState } from 'react'
import { FaTimes, FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import instance from '../axios'

const Login = () => {

  const [id, setId] = useState('')
  const [idck, setIdck] = useState(false)
  const [pw, setPw] = useState('')
  const [pwck, setPwck] = useState(false)
  const [pwview, setPwview] = useState(false)

  const loginData = async (e) => {
    e.preventDefault()
    const res = await instance.post('/login', {
      id : id,
      pw : pw
    })
    if (res.data.result == 'success') {
      alert(`${res.data.name}님 환영 합니다`)
      let obj = {auth : 'user', id : res.data.id}
      sessionStorage.setItem('info', JSON. stringify(obj))
      window.location.href = '/'
    } else if (res.data.result == 'fail'){
      alert('다시 시도 해주세요')
    }
  }

  useEffect(() => {
    if (id.length > 0) { 
      setIdck(true)
    } if (pw.length > 0) {
      setPwck(true)
    } 
  }, [id, pw])

  return (
    <div>
      <form onClick={loginData}>
        <div className="">
          아이디
          <input type="text" value={id} onChange={(e) => setId(e.target.value)}/>
          {idck && <button onClick={() => {setId(''); setIdck(!idck)}}><FaTimes/></button>}
          <br/>
          비밀번호
          <input type="password" value={pw} onChange={(e) => setPw(e.target.value)}/>
          {pwck && <button onClick={() => {setPw(''); setPwck(!pwck); setPwview(!pwview)}}><FaTimes/></button>}
          <button>
            {!pwview ? <FaRegEyeSlash/> : <FaRegEye/>}
          </button>
          <br/>
          <button type="submit">로그인</button>
        </div>
      </form>
      <Link to='/join'><button>회원가입</button></Link>
    </div>
  )
}

export default Login