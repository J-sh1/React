import React from 'react'
import { ListGroup } from 'react-bootstrap'
import CommentItem from './CommentItem'
import { useSelector } from 'react-redux'

const CommentList = () => {
  const comment = useSelector(state => state.post)
  console.log(comment)
  return (
    <div>
      <ListGroup variant="flush"></ListGroup>
      <CommentItem/>
    </div>
  )
}

export default CommentList