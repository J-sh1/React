import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const TodoHome = () => {
  return (
    <div className='todo-container'>
        <h1 className='todo-tit'>내 할 일</h1>
        <TodoInput />
        <TodoList title = '해야할 일' checked = {false}/>
        <TodoList title = '완료된 일' checked = {true}/>
    </div>
  )
}

export default TodoHome