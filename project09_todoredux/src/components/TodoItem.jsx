import React from 'react'
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux'
import { TodoActions } from '../redux/reducer/todoSlice'
import { useState } from 'react';

const TodoItem = ({item}) => {

  const dispatch = useDispatch()

  const handleCheckChange = () => {
    console.log('a')
    dispatch(TodoActions.checkChangeTodo({
      id : item.id
    }))
  }

  const handleDelete = (id) => {
    if(window.confirm('정발 삭제하시겠습니까?')){
      // console.log(id)
      dispatch(TodoActions.deleteTodo({id : id}))
    }
  }

  const [edit, setEdit] = useState()

  const handleSubmit = () => {
    dispatch(TodoActions.textChangeTodo({
      id : item.id,
      text : newText
    }))
    setEdit(false)
  }

  const handleEditChange = () => {
    setEdit(true)
  }

  const [newText, setNewText] = useState(item.text)


  return (
    // 미완료 - 완료를 구분하는 체크 버튼
    <li className='todo-item'>
        {item.complete 
        ? <FaCheckCircle style={{color : 'green'}} onClick = {handleCheckChange} />   
        : <FaRegCircle style={{color : 'lightgray'}} onClick = {handleCheckChange} />
        }
        
        {" "}

        {/* <FaCheckCircle style={{color : 'green'}}/> */}
        {/* <FaRegCircle style={{color : 'lightgray'}}/> */}

        {/* 할일 기본 - 할일 완료 - 할일 수정을 구분하는 태그들 */}
        {edit 
        ? <input type='text' className='todo-item-edit-input'
            value={newText}
            onChange={(e) => {setNewText(e.target.value)}}>
          </input>
        : (       
          item.complete
          ? <span className='todo-item-content-checked'>{item.text}</span>
          :<span className='todo-item-content'>{item.text}</span>
        )
          }
        
        

        {!item.complete
        &&
        <>
        {edit 
        ?
          <>
            {/* 수정 완료 버튼 */}
            <button className='todo-item-submit-btn' onClick={handleSubmit}>👍</button>
          </>
        :
          <>
            {/* 수정 버튼 */}
            <button className='todo-item-edit-btn' onClick={handleEditChange}>✍</button>
          </>
      }
        </>
        }

        {/* 삭제 버튼 */}
        <button className='todo-item-delete-btn' onClick={() => {handleDelete(item.id)}}>🗑</button>
    </li>
  )
}

export default TodoItem