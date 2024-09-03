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
        state.todos.push(action.payload)
        // console.log(state.todos)
       },
       checkChangeTodo(state, action){
        // console.log('state', state.todos)
        // console.log('action', action)
        const checkedTodo = state.todos.find(item => item.id == action.payload.id)
        if (checkedTodo){
            checkedTodo.complete = !checkedTodo.complete
        }
        // state.todos.map(item => item.id == action.payload)

       },
       textChangeTodo(state, action){
        const updateTodo = state.todos.find(item => item.id == action.payload.id)
        if(updateTodo){
            updateTodo.text = action.payload.text
        }
       },
       deleteTodo(state, action){
        // console.log('삭제')
        state.todos = state.todos.filter(item => item.id !== action.payload.id)
       }

    }
})
export const TodoActions = todoSlice.actions
export default todoSlice.reducer