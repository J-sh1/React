import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'

const store = configureStore({
    reducer : {
        movie : movieReducer
    }
})

export default store