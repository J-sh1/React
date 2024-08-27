import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({setAuth}) => {

    const nav = useNavigate()
    const handleSubmit = (e)=>{
        e.preventDefault()
        setAuth(true)
        nav('/')
    }
    
    return (
        <div className="login-box">
            <div className="login-box-tit">
                <h2>로그인</h2>
            </div>
            <div className="login-box-form">
                <form>
                    <div className="input-block">
                        <input type="text" placeholder="아이디를 입력해주세요." />
                    </div>
                    <div className="input-block">
                        <input type="password" placeholder="비밀번호를 입력해주세요." />
                    </div>
                    <div className="submit">
                        <input
                            type="submit"
                            className="login-btn"
                            onClick={handleSubmit}
                            value="로그인"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login