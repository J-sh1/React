import axios from 'axios'

const instance = axios.create({
    baseURL : 'http://localhost:3001'
    // 현재 사용하는 서버 주소 작성 => 배포 시 변경
})

export default instance