import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Ex17 = () => {

    /*
    비동기통신을 통해 데이터를 가져와보자
    ==> 생성자 위치, 렌더링 위치에서는 가져오지 않음
    ==> useEffect, 이벤트 함수

    1. Fetch
        - 장점 : 별도의 설치 X, JS 내장
        - 단점 : 기능이 단조로움, json 형태로 변환작업이 필요
    2. Axios 
        - 장점 : 기능이 다양함
        - 단점 : 별도의 설치 O
    */
   const [list, setList] = useState([])

    useEffect(() => {
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=67418ad73261ee9de44c19e6062acf23&targetDt=20240810'
        
        // Case 1. Fetchs
        // fetch(url)
        // .then(res => res.json())
        // .then(res => {
        //     // console.log(res.boxOfficeResult.weeklyBoxOfficeList)
        //     setList(res.boxOfficeResult.weeklyBoxOfficeList)
        // })
        // .catch(err => console.error(err))

        // Case 2. Axios
        // 2-1. npm i axios
        // 2-2. import axios from 'axios'
        axios.get(url)
        .then(res => {
            console.log(res.data.boxOfficeResult.weeklyBoxOfficeList)
            setList(res.data.boxOfficeResult.weeklyBoxOfficeList)
        })
        .catch(err => console.error(err))
   }, [])

  return (
    <div>
        <h1>영화 순위</h1>
        <table>
            <tbody>
                {list.map(item => <tr key={item.rnum}>
                    <td>{item.rank}위</td>
                    <td>{item.movieNm}</td>
                    <td>{item.openDt}</td>
                    <td>{item.rankOldAndNew}</td>
                </tr>)}

            </tbody>
        </table>
    </div>
  )
}

export default Ex17