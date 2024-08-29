import React from 'react'
import { ListGroup } from 'react-bootstrap'

const CommentItem = ({post}) => {
  console.log(post)
  return (
    <div>
      <ListGroup.Item>
            <b>{post.post}</b>
            {"  "}|{"  "}
            <span>작성자 : {post.writer}</span>
      </ListGroup.Item>
    </div>
  )
}

export default CommentItem