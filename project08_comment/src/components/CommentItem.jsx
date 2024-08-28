import React from 'react'
import { ListGroup } from 'react-bootstrap'

const CommentItem = () => {
  return (
    <div>
      <ListGroup.Item>
            <b>대박</b>
            {"  "}|{"  "}
            <span>작성자 : 김광주</span>
      </ListGroup.Item>
    </div>
  )
}

export default CommentItem