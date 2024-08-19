import ListItem from './ListItem_p'
import AddItem from './AddItem_p'
import { useContext } from 'react'
import { TodoContext_p } from '../../context/TodoContext_p'

const List = () => {

    const {todos, setTodos} = useContext(TodoContext_p)
    console.log(todos)

  return (
    <div className='list-container'>
      <ul>
        <ListItem/>
            
        

      </ul>
      <AddItem />
    </div>
  )
}

export default List