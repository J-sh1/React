import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'

const SearchBox = () => {
  return (
  <div>
    <Row className="g-2">
      <Col md>
          <Form.Control type="text" placeholder="작성자 검색"  />
      </Col>
      <Col md>
        <Button variant="primary">Search</Button>
      </Col>
    </Row>
  </div>
  )
}

export default SearchBox