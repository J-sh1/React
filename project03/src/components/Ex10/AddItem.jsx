import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'

const AddItem = () => {
    const {newtodo, setNewtodo, handleNewTodoAddtion} = useContext(TodoContext)
  return (
    <div className=''>
        <input type="text"
            value={newtodo}
            onChange={(e) => {
            setNewtodo(e.target.value)
        }}/>
        <button onClick={handleNewTodoAddtion}>add</button>
    </div>
  )
}

export default AddItem