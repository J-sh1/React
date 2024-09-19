import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home';
import Login from './pages/Login';
import Join from './pages/Join';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/login' element = {<Login/>}/>
          <Route path = '/join' element = {<Join/>}/>
        </Routes>
    </div>
  );
}

export default App;
