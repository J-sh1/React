import React, { useRef } from 'react'
import {Row, Col, Form, Button, FloatingLabel} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { posterActions } from '../redux/reducer/postSlice'

const CommentForm = () => {
  
  const dispatch = useDispatch()
  const writerRef = useRef()
  const postRef = useRef()

  const handlePost = () => {
   dispatch(posterActions.addpost({
    writer : postRef.current.value,
    post : writerRef.current.value
   }))
    // dispatch(
    //   {type : 'addPost', 
    //          payload : {writer : postRef.current.value,
    //           post : writerRef.current.value}
    //                     }
    //                   )
    postRef.current.value = ''
    writerRef.current.value = ''

    postRef.current.focus()
  }

  return (
    <div> 
      <Row className="g-2">
    <Col xs={12} md={8}>
        <FloatingLabel controlId="floatingInputGrid" label="내용">
          <Form.Control type="text" placeholder="Comment" ref={writerRef} />
        </FloatingLabel>
      </Col>
      <Col xs={6} md={4}>
        <FloatingLabel controlId="floatingInputGrid" label="작성자">
          <Form.Control type="text" placeholder="김광주"  ref={postRef} />
        </FloatingLabel>
      </Col>
     
    </Row>
    <div className="d-grid gap-2">
      <Button variant="primary" onClick={handlePost}>
        Post
      </Button>
    </div>
    </div>
  )
}

export default CommentForm