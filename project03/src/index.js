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
import App from './example/Ex04'

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

// 10. Mini Project - TodoList 구현 (state, context, component, props, map, event)
// import App from './example/Ex10'


// ============================= [STEP 4. React에서 사용하는 DOM, useRef] =========================================
// 11. useRef란?
// import App from './example/Ex11'

// 12. useRef 예제 (스타일 변경)
// import App from './example/Ex12'

// 13. useRef 예제2 (속성변경)
// import App from './example/Ex13'

// ============================= [STEP 5. LifeCycle] =========================================
// 14. React Class Component
// import App from './example/Ex14'

// 15. Function Component. ver LifeCycle(useEffect)
// import App from './example/Ex15'

// 16. useEffect 실습 : 참참참 게임
// import App from './example/Ex16'

// 17. useEffect를 이용한 openAPI실습
// import App from './example/Ex17'

// 17. useEffect를 이용한 openAPI실습 (날씨)
// import App from './example/Ex18'

//======================================= 복습 ===================================================
// import App from './example/Ex04_p'
// import App from './example/Ex10_p'


import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();