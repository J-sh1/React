import { useContext } from "react"
import { TodoContext_p } from "../../context/TodoContext_p"

const ListItem = () => {
    
    const {todos, setTodos} = useContext(TodoContext_p)
    console.log(todos.map(item => item.value))
    return (
        <div className='list-item'>
            <li>
                <input
                    type='checkbox'
                />
                <label style={{
                    textDecoration: "none"
                }}>
                    <span className='todo-text'>
                        물마시기
                    </span>

                </label>

                <button onClick={() => {}}>DELETE</button>
            </li>
        </div>
    )
}

export default ListItem