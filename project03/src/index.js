import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// 1. useState 개념 + React Event 개념
// import App from './example/Ex01'

// 2. useState 좋아요 실습 (+react에서 사진 가져오기)
import App from './example/Ex02'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
