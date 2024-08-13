import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

const ListItem = ({item}) => {
  // console.log(item)
  const {handleTodoDelete, handleTodoToggle}= useContext(TodoContext)
  return (
    <div className='list-item'>
      <li>
        <input type="checkbox" onChange={() => {handleTodoToggle(item.num)}} value={item.completed}/>
        <label style={{
          textDecoration : item.num == true ? 'line-through' : 'none'
        }}>
          <span className='todo-text'>
            {item.text}
          </span>
        </label>
        <button onClick={() => {handleTodoDelete(item.num)}}>DELETE</button>
      </li>
    </div>
  )
}

export default ListItem