import React, { useContext } from 'react'
import ListItem from './ListItem'
import AddItem from './AddItem'
import { TodoContext } from '../../context/TodoContext'

const List = () => {
    const {todos} = useContext(TodoContext)
    // console.log(todos[0].text)
  return (
    <div className='list-container'>
        <ul>
            {todos.map(item =>
                <ListItem key = {item.num} item = {item}/>
            )}
        </ul>
        <AddItem/>
    </div>
  )
}

export default List