import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { TodoActions } from '../redux/reducer/todoSlice'

const TodoInput = () => {

    const dispatch = useDispatch()
    const textRef = useRef()


    const handleAddBtn = () => {
        // console.log('ck', uuidv4());
        // console.log(textRef.current.value)
        dispatch(TodoActions.addTodo({
            id : uuidv4(),
            text : textRef.current.value,
            complete : false
        }))
        textRef.current.value = ''
        textRef.current.focus()
    }

    

  return (
    <div className='todo-inputbox'>
        <input type="text" className='todo-inputbox-input' ref={textRef} />
        <input type="button" className='todo-inputbox-add-btn' 
            value='등록' onClick={handleAddBtn} />
    </div>
  )
}

export default TodoInput