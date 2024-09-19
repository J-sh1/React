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
    try {
      console.log('백엔드')
      const res = await instance.post('/login', {
        id: id,
        pw: pw,
      })
      if (res.data.result === 'success') {
        alert(`${res.data.name}님 환영합니다`)
        const obj = { auth: 'user', id: res.data.id }
        sessionStorage.setItem('info', JSON.stringify(obj))
        window.location.href = '/'
      } else {
        alert('로그인 실패. 다시 시도 해주세요.')
      }
    } catch (error) {
      console.error('로그인 에러:', error)
      alert('서버 에러 발생. 다시 시도 해주세요.')
    }
  }

  useEffect(() => {
    setIdck(id.length > 0)
    setPwck(pw.length > 0)
  }, [id, pw])

  return (
    <div>
      <form onSubmit={loginData}>
        <div className="">
          <label htmlFor="loginId">아이디</label>
          <input
            type="text"
            id="loginId"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          {idck && (
            <button
              type="button"
              onClick={() => {
                setId('')
                setIdck(false)
              }}
            >
              <FaTimes />
            </button>
          )}
          <br />
          <label htmlFor="loginPw">비밀번호</label>
          <input
            type={!pwview ? 'password' : 'text'}
            id="loginPw"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          {pwck && (
            <button
              type="button"
              onClick={() => {
                setPw('')
                setPwck(false)
              }}
            >
              <FaTimes />
            </button>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault() // 버튼 클릭 시 기본 동작 방지
              setPwview(!pwview)
            }}
          >
            {!pwview ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
          <br />
          <button type="submit">로그인</button>
        </div>
      </form>
      <Link to="/join">
        <button type="button">회원가입</button>
      </Link>
    </div>
  )
}

export default Login
