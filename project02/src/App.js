import './App.css'
import MenuBox from'./components/MenuBox'
import MemberBox from './components/MemberBox'

function App() {

  /*
  컴포넌트(Component)
    - React로 만들어진 앱을 이루는 최소 단위
    - 반복되는 코드를 하나로 묶어 컴포넌트로 만든다.
    - 내가 원하는 코드를 묶어서 태그화 시키는 것
    ** 반드시 컴포넌트는 "대문자"로 시작한다. 기존 HTML 태그와 구분하기 위함
  */

  /*
  프로퍼티 or 프롭스(props)
    - 상위 컴포넌트가 하위 컴포넌트에 값을 전달할 때 사용

    - 상위 컴포넌트
      <컴포넌트이름 속성="값" 속성="값"/>
      단순 문자열? "값"
      변수 사용? {변수이름}

    - 하위 컴포넌트
      함수의 매개변수로 Object 형태의 값을 전달 받는다.
      const 컴포넌트 이름 = (매개변수) => {
          매개변수.속성 <- 값이 넘어온다.
        }
  */

  let price = 3500
  let salePrice = 3000
  let teamName = '신록'
  return (
    <div>
      <MenuBox name = "아메리카노" price = {salePrice}/>
      <MenuBox name = "카페라떼" price = {price}/>
      <MenuBox name = "치약" price = {salePrice}/>

      <hr/>
      <h2>실습</h2>
      {/* 
      실습) 팀원을 소개하는 컴포넌트를 생성하자.
        1. components 폴더 안에 MemberBox 라는 컴포넌트를 생성 
        2. teamName과 memberName 이라는 속성 값을 전달 
          - 팀 이름은 변수로 전달 
          - 멤버 이름은 값으로 전달 
        3. 완료 됐으면 캡쳐해서 단톡방에 업로드  
      */}
      <MemberBox teamName = {teamName} memberName = "조승혁" />
      <MemberBox teamName = {teamName} memberName = "이정훈" />
      <MemberBox teamName = {teamName} memberName = "임정윤" />
      <MemberBox teamName = {teamName} memberName = "안수현" />
      <MemberBox teamName = {teamName} memberName = "고원희" />
    </div>
  );
}

export default App;
