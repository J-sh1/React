import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {

  // store에 있는 state에 변경요청을 할 때 : useDispatch()
  const dispatch = useDispatch()
  
  // store에 등록된 state 확인, 접근 : useSelector()
  const num = useSelector(state => state.num)

  const handleIncrement = () => {
    // dispatch 안에 보내줄 인자 {type, payload}
    dispatch({type : 'increment'})
  } 
  const handleDecrement = () => {
    dispatch({type : 'decrement'})
  }
  const incrementAmount = () => {
    dispatch({type : 'incrementAmount', payload : 5})
  }
  const decrementAmount = () => {
    dispatch({type : 'decrementAmount', payload : 5})
  }

  
  return (
    <div className="">
      <h1>{num}</h1>
      <button onClick={handleIncrement}>1씩 증가</button>
      <button onClick={handleDecrement}>1씩 감소</button>
      <button onClick={incrementAmount}>5씩 증가</button>
      <button onClick={decrementAmount}>5씩 감소</button>
    </div>
  );
}

export default App;
