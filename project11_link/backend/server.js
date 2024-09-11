const express = require('express')
const app = express()

// routes 폴더 안에 파일이름이 index인 경우는 경로를 작성할 때 생략이 가능하나, 파일이름이 다른 경우에는 정확하게 작성해줘야 한다
// ex) ./routes/user
const indexRouter = require('./routes')

// 정적인 파일을 가져오기 위한 세팅
const path = require('path')
app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')))

// CORS 오류 처리를 위한 모듈 가져오기
// 1. npm i cors
// 2. require

/*
CORS(Cross-Origin-Resiurces-Sharing) 교차 출처 리소스 공유 정책
    - Origin(출처)
        https://localhost:3000/123?search=hello
            * https:// : 프로토콜
            * localhost : 호스트
            * 3000 : 포트번호
            * Origin : 프로토콜 + 호스트 + 포트번호
    - cors 해결 -> 브라우저에게 요청
    - node에서는 cors라는 미들웨어

    app.use(cors({
        origin : '*'
    }))
*/
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : false}))

// 세션 설정
const session = require('express-session')
const fileStore = require('session-file-store')(session)

let fileStoreOptions = {
    path :'./sessions', // 세션 파일 저장 경로
    reapInterval : 10, // 세션 정리 주기(10초)
}

// 세션 미들웨어 설정
app.use(session({
    httpOnly : true, // http를 통해서만 세션에 접근
    resave : false, // 세션을 항상 재저장하지 않도록
    secret : 'test', // 세션암호화
    saveUninitialized : false, // 초기화 되지 않은 세션은 저장하지 않도록
    store : new fileStore(fileStoreOptions),
    cookie : {maxAge : 30000} // 쿠키의 유효기간 30초 
}))

app.use('/', indexRouter)

app.set('port', process.env.PORT || 3001)
app.listen(app.get('port'), () => {
    console.log(`Server is running on ${app.get('port')}`)
})