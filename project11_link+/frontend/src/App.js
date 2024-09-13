import { useEffect, useState } from 'react';
import './App.css';
import Test from './components/Test'
import TestLogin from './components/TestLogin';

function App() {

  const [sInfo, setSInfo] = useState()
  console.log(JSON.parse(sessionStorage.getItem('info')))

  useEffect(() => {
    setSInfo(JSON.parse(sessionStorage.getItem('info')))
  }, [])

  const logout = () => {
    sessionStorage.removeItem('info')
    alert('다음에 다시 방문 해주세요')
    window.location.href = '/'
  }

  return (
    <div className="App">
      <h1>React Node 연동하기</h1>
      { sInfo &&
        <p>{sInfo.id}님 환영합니다.</p>
      }
      <Test/>
      <hr/>
      <TestLogin/>
      <hr/>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

export default App;
