import './App.css';

function App() {

  /*
  JSX : 하나의 파일 안에 HTML 문법과 JS문법을 동시에 작성
    => 가독성이 좋고 작성이 쉽다.
    => HTMl - JS의 분리감이 없다.

  JSX는 확장자가 기본적으로 .jsx 이지만, .js로 사용도 가능하다.

  [JSX의 특징]
  1. 여러 요소가 있다면 반드시 하나의 부모요소로 감싸 줄 것
    이 때, 꼭 div태그가 아니여도 가능(다른태그 0, <></>)

  2. 표현식 사용
    - 만약, return 문 안에서 JS 문법을 사용하려면 {} 작성  

  3. 조건문 사용
    3.1.) 삼항연산자 -> return 문 안에 {조건문 ? 실행문1 : 실행문2}
    3.2.) && 연산자 -> return. 문 안에 {조건문 && 실행문}
    3.3.) if문은 return 문 안에서 사용 불가
      return 문 위에서 if문을 끝내주어야 한다.

  4. 스타일링 적용
    4.1.) 객체 형태로 style 속성에 삽입
    4.2.) css 형태로 삽입
      - class 대신 className 이라는 속성 이름을 사용
      - import를 통해 css 파일을 가져온다.

  5. 그 외 기존 문법과 다른 점
    - 태그를 사용할 때 무조건 소문자만 사용
      ex) <Div></Div> (x) <div></div> (o)
    - 끝 태그 생략 불가
      ex) HTML : <br></br> => <br/> => <br> 생략 가능      
          React : <br></br> => <br/>
  */

  let name = "관리자"
  let time = "오전" // 시간
  let msg = "" // 시간에 따라 안내할 메세지

  if(time === "오전") {
    msg = "즐거운 데이터 수업~"
  } else if (time === "오후") {
    msg = "재밌는 리액트 수업~"
  } else {
    msg = "퇴실 눌러주세요!"
  }

  // 4.1 객체 스타일링
  const titleStyle = {
    color : 'blue',
    backgroundColor : 'whitesmoke',
    fontSize : '50px'
  }

  return (
    <div className = 'container'>
      <h1 style = {titleStyle}>{name}의 리액트 홈페이지😀</h1>

      {/* 3.1. 조건식(삼항연산자 이용) */}
      {name === "조승혁"
      ? <p>환영합니다!</p>
      : <p>로그인 해주세요...</p>
      }
      {/* 3.2. 조건식(&&연산자 이용) */}
      {name === "관리자" && <a href = "#">회원정보보기</a>}
      {/* 3.3. if문 활용 */}
      {msg}
    </div>
  );
}

export default App;
