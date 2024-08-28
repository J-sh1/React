import React, { useRef } from 'react'
import {Row, Col, Form, Button, FloatingLabel} from 'react-bootstrap'
import { useDispatch } from 'react-redux'

const CommentForm = () => {
  
  const dispatch = useDispatch()
  const test = useRef()
  const test1 = useRef()

  const handlePost = () => {
    dispatch({type : 'addPost', payload : [{writer : test1.current.value, post : test.current.value}]})
  }

  return (
    <div> 
      <Row className="g-2">
    <Col xs={12} md={8}>
        <FloatingLabel controlId="floatingInputGrid" label="내용">
          <Form.Control type="text" placeholder="Comment" ref={test} />
        </FloatingLabel>
      </Col>
      <Col xs={6} md={4}>
        <FloatingLabel controlId="floatingInputGrid" label="작성자">
          <Form.Control type="text" placeholder="김광주"  ref={test1} />
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