import React, { useState } from 'react'
import '../css/ex10.css'
import List from '../components/Ex10_p/List_p'
import { TodoContext_p } from '../context/TodoContext_p'

const Ex10 = () => {

    // 할일들 목록 배열 
    const [todos, setTodos] = useState([{
        'vlaue' : '물마시기',
        'ck' : true
    },
    {
        'vlaue' : '잠자기',
        'ck' : false
    }])

    // 새로운 할일 텍스트 
    const [newTodo, setNewTodo] = useState("")

    /** todos 배열에 새로운 할일 객체를 추가해주는 함수 */
    const handleNewTodoAddtion = () => {
    }

    /** 사용자가 선택한 todo 데이터를 배열에서 삭제하는 함수 */
    const handleTodoDelete = (num) => {

    }

    /** 사용자가 선택한 todo 데이터를 완료했을 때 체크&밑줄 */
    const handleTodoToggle = (num) => {

    }


    return (
        <TodoContext_p.Provider value={{todos, setTodos,
            handleNewTodoAddtion,
            handleTodoDelete,
            handleTodoToggle
        }}>
            <div className='todo-container'>
                <h1>Todo List</h1>
                <List />
            </div>
        </TodoContext_p.Provider>
    )
}

export default Ex10