import React from 'react'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import instance from '../axios';

const Join = () => {

  const [id, setId] = useState('')
  const [pw, setPw] = useState('')
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [number, setNumber] = useState('')
  const [pwck, setPwck] = useState(false)

  const joinData = async (e) => {
    e.preventDefault()
    console.log('데이터전송')
    setId('')
    setPw('')
    setName('')
    setNumber('')

    const res = await instance.post('/joinData', {
      id: id,
      pw: pw,
      name: name,
      gender: gender,
      number: number
    })
    if (res.data.result === 'success') {
      alert('회원가입 완료')
      window.location.href = '/'
    }
  }

  return (
    <div>
      <Link to='/'>메인</Link>
      <form onSubmit={joinData}>
        <div className="">
          <div className="">
            아이디<br /><input type="text" value={id} autoFocus placeholder="아이디" onChange={(e) => { setId(e.target.value) }} autoComplete="userid" /><br />
            <div className="">
              비밀번호<br /><input value={pw} type={!pwck ? 'password' : 'text'} placeholder="비밀번호" onChange={(e) => { setPw(e.target.value) }} autoComplete="new-password" />
              <button type='button' onClick={() => { setPwck(!pwck) }} tabIndex={-1}>
                {!pwck ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            이름<br /><input value={name} type="text" onChange={(e) => { setName(e.target.value) }} /><br />
          </div>
          <br />
          <div className="">
            <div className="">
              성별<br />
              <div className="">
                <input type="radio" name="gender" value="M" onChange={e => { setGender('M') }} />
                <label>남자</label>
              </div>
              <div className="">
                <input type="radio" name="gender" value="W" onChange={e => { setGender('W') }} />
                <label>여자</label>
              </div>
            </div>
            전화번호<br /><input type="text" value={number} onChange={(e) => { setNumber(e.target.value) }} /><br />
          </div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  )
}

export default Join