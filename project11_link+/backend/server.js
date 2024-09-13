const express = require('express')
const app = express()
const indexsRouter = require('./routes/index')

// React는 결국 Single Page로 html 파일로 구성이 되어있음
// 정적인 파일을 사용하기 위한 세팅이 필요함

const path = require('path')
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')))

/*
Cross Error(Cross-Origin-Resource-Sharing) 교차 출처 리소스 공유 정책
    - Origin 이 뭘까? 출처
        http://localhost:300/123?search=hello
            * http:// => 프로토콜
            * localhost => 호스트
            * 3000 => 포트번호
            * 그 뒤로는 쿼리스트릉, 파라미터,
            * 출처 == 프로토콜 + 호스트 + 포트번호
            
    - origin이 다른 경우 일단 차단(cors error) => 얘는 브라우저가 하는 역할
    - 브라우저에게 요청

    1. cors 설치 : npm i cors
    2. require
    3. 사용
*/

const cors = require('cors')
app.use(cors()) // cors 오류 해결
app.use(express.json()) // JSON 형태의 데이터 해석
app.use(express.urlencoded({extended : false})) // form post 형태의 데이터 해석

app.use('/', indexsRouter)
app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log(`Server is running on http://localhost:${app.get('port')}`)
})