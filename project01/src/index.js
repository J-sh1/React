import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// 1. JSX의 특징, 개념
// import App from './App';

// 2. JSX를 이요한 예제
import App from './AppExample'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // 리액트에서 잠재적인 에러, 경고를 확인하기 위함
    <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
