import {configureStore} from'@reduxjs/toolkit'
import postReducer from './reducer/postSlice'

// reducer/reducer.js 파일은 old redux을 위한 파일
// toolkit을 위한 파일은 ~~Slice.js
const store = configureStore({
    reducer : {
        post : postReducer
    }
})

export default store


// import {createStore} from 'redux'
// import reducer from './reducer/reducer'

// const store = createStore(reducer)
// export default store

