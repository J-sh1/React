import React, { useEffect } from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const TodoList = ({title, checked}) => {

const todos = useSelector(state => state.todo.todos)


// console.log(todos)
useEffect(() => {
}, [todos])

  let comTodos = todos.filter(item => item.complete == true)
  let unComTodos = todos.filter(item => item.complete == false)

  return (
    <div className='todo-list'>
        <p>{title} : {title == '해야할 일'
          ? unComTodos?.length
          : comTodos?.length}개</p>
        <ul className='todo-list-ul'>
        {todos.map((item) => {
          if (item.complete === checked) {
            return <TodoItem key={item.id} item={item} />
          } else {
            return null
          }
        }
        )}
        </ul>
    </div>
  )
}

export default TodoList