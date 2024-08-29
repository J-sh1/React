import React, { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import CommentItem from './CommentItem'
import { useSelector } from 'react-redux'

const CommentList = () => {
  // const {post, keyword} = useSelector(state => state)
  // console.log('post', post, 'keyword',keyword)
  const {post, keyword} = useSelector(state => state.post)

  const [resultList, setResultList] = useState([])

  useEffect(() => {
    if (keyword == '') {
      // setResultList(post)
    } else {
      // setResultList(post.filter(item => item.writer.includes(keyword)))
    }
  }, [post, keyword])

  return (
    <div>
      <ListGroup variant="flush"></ListGroup>
      {resultList.map(item => 
        <CommentItem key={item.post} post = {item}/>
      )}
    </div>
  )
}

export default CommentList