function AppExample() {

    // STEP 1. prompt를 통해 사용자에게 이름을 입력받아준다
    //          (이름을 작성해주세요.)
    let name = prompt("이름을 작성해주세요.")
    console.log(name)
    // STEP 2. 현재 날짜를 가지고 올 것
    //          오늘 날짜 : new Date()
    //          toLocaleDateString() => 날짜 정리
    let today = new Date()
    let date = today.toLocaleDateString()
    console.log(date)

    let month = today.getMonth() + 1
    console.log(month)
    // SETP 3. 현재 월에 따른 계절을 대입
    //          조건 1) 3월~5월 : 봄
    //          조건 2) 6월~8월 : 여름
    //          조건 2) 9월~11월 : 가을
    //          조건 2) 12월~2월 : 겨울
    let summer
    if(month >= 3 && month <= 5) {
        summer = '봄'
    } else if (month >= 6 && month <= 8) {
        summer = '여름'
    } else if (month >= 9 && month <= 11) {
        summer = '가을'
    } else {
        summer = '봄'
    }
    // STEP 4. 결과창을 구성
    // 오늘 날짜
    // ooo님 지금은 여름입니다. 좋은하루 보내세요!

    return(
        <div>
            <h1>2024.08.05</h1>
            <hr/>
            <h4>{name}님 지금은 {summer}입니다. 좋은하루 보내세요!</h4>
        </div>
    )
}

export default AppExample