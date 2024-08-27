import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import {Routes, Route} from 'react-router-dom'
import Footer from './components/Footer';
import Main from './page/Main';
import Login from './page/Login';
import GoodsList from './page/GoodsList';
import GoodsDetail from './page/GoodsDetail';
import PrivateRoute from './routes/PrivateRoute';
import axios from './axios'

function App() {

  const [auth, setAuth] = useState(false)
  const [goods, setGoods] = useState([])

  return (
    <div>
      <Header auth = {auth} setAuth = {setAuth}/>
        <Routes>
          <Route path='/' element = {<Main/>} />
          <Route path='/login' element = {<Login setAuth = {setAuth}/>} />
          <Route path='/menu/list' element = {<GoodsList goods = {goods} setGoods = {setGoods}/>} />
          {/* 로그인 상태에 따라 다른 페이지로 이동되도록 구현 */}
          <Route path='/menu/:num' element = {<PrivateRoute auth = {auth}/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
