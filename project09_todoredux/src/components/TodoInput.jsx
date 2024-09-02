import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { TodoActions } from '../redux/reducer/todoSlice'
import { useEffect } from 'react'

const TodoInput = () => {
    
    //DOM 요소를 참조해서 접근하기 위해 useRef 선언 
    const dispatch = useDispatch()
    
    // store에 잇는 state를 변경하기 위한 요청 -> useDispatch
    const textRef = useRef()

    // 함수 선언
    const handleAddBtn = () => {
        // console.log('ck', uuidv4());
        // console.log(textRef.current.value)

        // store안에 있는 reducer를 호출
        // 객체 형태로 전송
        dispatch(TodoActions.addTodo({
            id : uuidv4(),
            text : textRef.current.value,
            complete : false
        }))
        // 입력된 내용을 비우고 + 포커싱
        textRef.current.value = ''
        textRef.current.focus()
    }

    // 화면이 렌더링 된 직후 실행할 로직
    useEffect(() => {
      // textRef에서 참조하고 있는 DOM 요소에 포커싱
      textRef.current.focus()
    }, [])

  return (
    <div className='todo-inputbox'>
        <input type="text" className='todo-inputbox-input' ref={textRef} />
        <input type="button" className='todo-inputbox-add-btn' 
            value='등록' onClick={handleAddBtn} />
    </div>
  )
}

export default TodoInput