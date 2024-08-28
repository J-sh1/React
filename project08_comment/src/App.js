import './App.css';
import CommentForm from './components/CommentForm'
import CommentList from './components/CommentList'
import SearchBox from './components/SearchBox'

function App() {
  return (
    <div style={{padding : '7%'}}>
      <h1 style={{textAlign : 'center'}}>Twitter</h1>
      <div>
        <SearchBox />
        <hr/>
        <CommentForm/>
        <hr/>
        <CommentList/>
      </div>
    </div>
  );
}

export default App;
