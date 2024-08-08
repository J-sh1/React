import React from 'react'
import {Card, Button} from 'react-bootstrap'

const Ex06Card = ({sns, title, birthYear, content, imgSrc}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgSrc} height="300px"/>
      <Card.Body>
        <Card.Title>{title} {birthYear}년생</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Button variant="primary" onClick={() => window.location.href = sns}>Instargram </Button>
      </Card.Body>
    </Card>
  )
}

export default Ex06Card