import { useEffect, useState } from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import api from './api'
import NavScrollExample from './components/NavScrollExample';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import {Button} from 'react-bootstrap'


function App() {

  const [movie, setMovie] = useState()
  // 임시 코드 시작
  useEffect(() => {
    api.get('/movie/top_rated?language=en-US&page=1')
    .then(res => console.log(res))
  }, [])
  // 임시 코드 끝

  return (
    <div>
      <NavScrollExample />
      <Routes>
        <Route path='/' element = {<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
