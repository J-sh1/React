import './App.css';
import { useEffect } from 'react'
import api from './api'
import Header from './components/Header';
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/movie/:id' element={<MovieDetail/>}></Route>
          <Route path='/movies' element = {<Movies />}></Route>
        </Routes>
    </div>
  );
}

export default App;
