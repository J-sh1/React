import axios from 'axios'


const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_ACCESS_TOKEN}`
      }
})

// 환경변수 파일은 .env로, src가 아닌 프로젝트 폴더에 저장
// 환경변수 파일 수정 시, 꼭! 서버 다시 시작
// 화경변수 파일은 gitignore 파일이기 때문에, 팀원들과 github로 코드 공유할 시,
// env 파일은 꼭 각자 세팅할 것


export default api