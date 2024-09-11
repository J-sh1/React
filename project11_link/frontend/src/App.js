import './App.css';
import Test from './components/Test'
import TestLogin from './components/TestLogin';
import instance from './axios';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState()

  /*
  React + Node 연동 시, React를 run build 해서 서버에 연결
    -> React 의 내용이 바뀔 때 마다 run build 작업을 해야한다는 불편함 o
    -> 그래서 npm start 로 React 임시 서버를 열어서 편하게 React작업을 해주고,
      마지막으로 최종 run build 작업을 해서 개발
  */
      /** 현재 session 값을 확인 할 수 있는 함수 */
      const getSession = async () => {
        console.log('세션호출')
        const res = await instance.get('/getSession')
        // res.data('res', res.data)
      }

      useEffect(() => {
        getSession()
      }, [])
    const logout = async () => {
      console.log('로그아웃')
      const res = await instance.get('/logoutData')
      console.log('res',res.data)
      setUser('')
      alert('다음에 또 방문해주세요')
    }

  return (
    <div className="App">
      <h1>리액트 노드 연동하기{user}</h1>
      <Test/>
      <TestLogin setUser = {setUser}/>
      <hr/>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
}

export default App;
