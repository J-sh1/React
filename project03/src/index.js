import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// ============================= [STEP 1. state 관리] =========================================

// 1. useState 개념 + React Event 개념
// import App from './example/Ex01'

// 2. useState 좋아요 실습 (+react에서 사진 가져오기)
// import App from './example/Ex02'

// 3. useState 랜덤게임 실습
// import App from './example/Ex03'

// 4. useState 최종실습 : 주사위 게임 (+bootstrap 사용법)
// import App from './example/Ex04'


// ============================= [STEP 2. 배열함수를 이용한 렌더링] =========================================

// 5. map 함수, filter 함수
// import App from './example/Ex05'

// 6. map 함수 실습, filter 함수 실습
// import App from './example/Ex06'

// ============================= [STEP 3. context API (전역적 state사용)] =========================================

// 7. 양방향 데이터 전달
// import App from './example/Ex07'

// 8. Context API 사용
// import App from './example/Ex08'

// 9. Context API 실습 (다크모드)
// import App from './example/Ex09'

// Mini Project - TodoList 구현 (state, context, component, props, map, event)
import App from './example/Ex10'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
