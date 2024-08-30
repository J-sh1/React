import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './reducer/todoSlice'

const store = configureStore({
    reducer : {
        todo : todoReducer
    }
})

export default store