import './App.css';
import {Routes, Route} from 'react-router-dom'
import Main from './pages/Main';
import About from './pages/About';
import Mypage from './pages/Mypage';
import Product from './pages/Product';
import { useNavigate,Link } from 'react-router-dom'
import NotFound from './pages/NotFound';

function App() {

  /*
  1. npm i react-router-dom 설치
  2. index.js로 이동해서 App을 BrowserRouter로 감싸기(필수!)
    - Type Error : Cannot read properties off undefind(reading 'pathname')
      -> BrowserRouter를 감싸주지 않았기 떄문에 생기는 오류, 라우팅 잘못한 경우
      -> HTML5의 HistoryAPI를 사용하여 URL과 UI를 동기화 해주는 Router
  3. 페이지 만들기
    - 페이지 역할을 해줄 컴포넌트
    - 컴포넌트를 요청할 조건 path(Routes, Route)
      Routes : 여러 Route들을 감싸서 그중 사용자 요청 조건에 맞는 라우트 하나만 렌더링 해준다. (과거에는 Switch라는 이름의 문법 사용)
      Route : 여러 경로
          - 필수속성 2가지 path, element
          - path(경로) : 사용자가 이렇게 요청 했을 때
          - element(컴포넌트) : 어떤 컴포넌트를 보여줄게

  */
  const nav = useNavigate()

  return (
    <div className="App">
      {/* 
      Routes 바깥에 있는 요소들은 라우트 처리와 관계 없이 고정
        - 상단바, 하단바 등등 고정되어 있어야 하는 요소들은 Routes 바깥에 위치
      */}
      <Link to='/'>
      <h1>React-Router-Dom</h1>
      </Link>
      <Routes>
        <Route path = '/' element = {<Main />}></Route>
        <Route path = '/about' element = {<About />}></Route>
        <Route path = '/mypage' element = {<Mypage />}></Route>
        {/*
        useParams 사용
          - path 작성 + :변수명
        */}
        <Route path = '/product/:num' element = {<Product />}></Route>
        <Route path = '*' element = {<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
