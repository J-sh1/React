import React from 'react'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';
import instance from '../axios';

const Join = () => {

  const [pwck, setPwck] = useState(false)
  const [id, setId] = useState()
  const [pw, setPw] = useState()
  const [name, setName] = useState()
  const [gender, setGender] = useState()
  const [number, setNumber] = useState()

  const joinData = async (e) => {
    e.preventDefault()
    console.log('데이터전송')
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
      <form onSubmit={joinData}>
        <div className="">
          <Link to='/'>메인</Link>
          <div className="">
            아이디<br /><input type="text" autoFocus placeholder="아이디" onChange={(e) => { setId(e.target.value) }} /><br />
            <div className="">
              비밀번호<br /><input type={!pwck ? 'password' : 'text'} placeholder="비밀번호" onChange={(e) => { setPw(e.target.value) }} />
              <button type='button' onClick={() => { setPwck(!pwck) }}>
                {!pwck ? <FaRegEyeSlash /> : <FaRegEye />}
              </button>
            </div>
            이름<br /><input type="text" onChange={(e) => { setName(e.target.value) }} /><br />
          </div>
          <br />
          <div className="">
            <div className="">
              성별<br />
              <div className="">
                <input type="radio" name="gender" value="남자" onChange={e => { setGender('남자') }} />
                <label>남자</label>
              </div>
              <div className="">
                <input type="radio" name="gender" value="여자" onChange={e => { setGender('여자') }} />
                <label>여자</label>
              </div>
            </div>
            전화번호<br /><input type="text" onChange={(e) => { setNumber(e.target.value) }} /><br />
          </div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  )
}

export default Join