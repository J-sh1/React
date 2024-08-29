// React Toolkit 사용법
import {configureStore} from'@reduxjs/toolkit'
import countReducer from './reducer/countSlice'

// reducer/reducer.js 파일은 old redux을 위한 파일
// toolkit을 위한 파일은 ~~Slice.js
const store = configureStore({
    reducer : {
        count : countReducer
    }
})

export default store

{/** Old Redux 사용법 */}
// import {createStore} from 'redux'
// import reducer from './reducer/reducer'

// const store = createStore(reducer)
// export default store