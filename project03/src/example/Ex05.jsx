import React from 'react'

const Ex05 = () => {

    /*
    Map 함수 : 어떤 배열을 다른 형태의 배열로 재생산할 때 사용하는 배열 함수
            - 배열에만 사용이 가능
    */

    let list = ['임명진', '선영표', '정봉균', '황지혜', '박병관', '조준용']
    // console.log('list', list)
    
    let newList = list.map(item => <h1 key={item}>{item}</h1>)
    // console.log('new List', newList)

    // === 예제 ===
    let lunch = ['치킨', '피자', '카레']
    let newLunch = lunch.map(item => <li key={item}>{item}</li>)

    let people = [
        {name : '홍길동', age : 30, bloodType : 'A'},
        {name : '고길동', age : 60, bloodType : 'AB'},
        {name : '둘리', age : 10, bloodType : 'B'}
    ]
    
    let peopleName = people.map(item => item.name)
    // console.log(peopleName)

    /*
    Filter 함수 : 주어진 배열에서 조건에 true면 유지,
                  false면 버리고 새로운 배열로 반환
    */

    const word  = ['apple', 'banana', 'blackberry', 'srtawberry', 'lime', 'grape']
    let result = word.filter(item => item.length > 6)
    console.log(result)
    
    // 위 people 배열 안에서 나이가 30 이상인 사람만 출력
    let result2 = people.filter(item => item.age >= 30)
    console.log(result2)

    // 만약 이 필터링 된 결과를 화면 띄워 준다면?
    let mapResult =  result2.map(item => <p>{item.name}은 {item.age}살 입니다.</p>)

  return (
    <div>
        <h1>오늘의 점심메뉴</h1>
        <ul type="circle">
            {newLunch}    
            {mapResult}
        </ul>
        
    </div>
  )
}

export default Ex05