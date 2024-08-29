import {createSlice}  from '@reduxjs/toolkit'

let initialState = {
    num : 0
}

const counterSlice = createSlice({
    name : 'counter',
    initialState,
    reducers : {
        increment(state, action){
            console.log('increment', action.payload)
            state.num += action.payload
        },
        decrement(state, action){
            state.num -= action.payload
        }
        // ... state, num : state.num - action.payload
    }
})

// Component 에서 reducer 함수를 실행할 수 있도록 내보내기
export const counterActions = counterSlice.actions

// store에서 reducer에 접근할 수 있도록 내보내기
export default counterSlice.reducer