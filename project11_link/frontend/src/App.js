import './App.css';
import Test from './components/Test'

function App() {

  /*
  React + Node 연동 시, React를 run build 해서 서버에 연결
    -> React 의 내용이 바뀔 때 마다 run build 작업을 해야한다는 불편함 o
    -> 그래서 npm start 로 React 임시 서버를 열어서 편하게 React작업을 해주고,
      마지막으로 최종 run build 작업을 해서 개발
  */

  return (
    <div className="App">
      <h1>리액트 노드 연동하기</h1>
      <Test/>
    </div>
  );
}

export default App;
