import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const TodoHome = () => {
  return (
    <div className='todo-container'>
        <h1 className='todo-tit'>내 할 일</h1>
        <TodoInput />
        <TodoList/>
        <TodoList/>
    </div>
  )
}

export default TodoHome