import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = () => {

const todos = useSelector(state => state.todo.todos)


console.log(todos)
useEffect(() => {
}, [todos])

  return (
    <div className='todo-list'>
        <p>해야할 일 : 0개</p>
        <ul className='todo-list-ul'>
            {todos.map(item => 
                <TodoItem key={item.id} item = {item}/>
            )}
        </ul>
    </div>
  )
}

export default TodoList