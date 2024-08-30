import { createSlice } from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name : 'todo',
    initialState : {
        todos : []
    },
    reducers : {
        /*
        1. addTodo : todos 배열에 할일을 추가한다.
        2. checkChangeTodo : 선택한 할 일의 완료 여부를 수정한다. T/F
        3. textChangeTodo : 선택한 할 일의 내용을 수정한다.
        4. deleteTodo : 선택한 할 일을 삭제한다.
        */
       addTodo(state, action){
        // console.log('action', action, 'state', state)
        state.todos = [...state.todos, action.payload]
        // console.log(state.todos)
       }
    }
})
export const TodoActions = todoSlice.actions
export default todoSlice.reducer