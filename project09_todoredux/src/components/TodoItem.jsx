import React from 'react'
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const TodoItem = ({item}) => {
  return (
    // 미완료 - 완료를 구분하는 체크 버튼
    <li className='todo-item'>
        {item.complete 
        ?   <FaCheckCircle style={{color : 'green'}}/>
        : <FaRegCircle style={{color : 'lightgray'}}/>
        }
        {/* <FaCheckCircle style={{color : 'green'}}/> */}
        <FaRegCircle style={{color : 'lightgray'}}/>

        {/* 할일 기본 - 할일 완료 - 할일 수정을 구분하는 태그들 */}
        {/* <input type="text" name="" id="" className='todo-item-edit-input'/> */}
        <span className='todo-item-content'>{item.text}</span>
        {/* <span className='todo-item-content-checked'>물 2L 마시기</span> */}

        {/* 수정 완료 버튼 */}
        <button className='todo-item-submit-btn'>👍</button>
        {/* 수정 버튼 */}
        <button className='todo-item-edit-btn'>✍</button>
        {/* 삭제 버튼 */}
        <button className='todo-item-delete-btn'>🗑</button>
    </li>
  )
}

export default TodoItem