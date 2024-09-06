import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Container, Row, Col, Accordion, Dropdown, Card, Button} from 'react-bootstrap'

const Movies = () => {

    const {popularMovies} = useSelector(state => state.movie)
    const [filter, setFilter] = useState([])

    useEffect(() => {
        console.log(popularMovies)
        if(popularMovies.length !== 0){
            setFilter(popularMovies)
        }
        
    }, [])

  return (
    <div>
        {popularMovies.length > 0 && (
            <Container>
                <Row>
                    <Col>
                        <h1>인기 영화 필터링</h1>
                    </Col>
                </Row>
                <Row>
                    <Col sm = {3}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>정렬</Accordion.Header>
                                <Accordion.Body>
                                    <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                            정렬 방식을 선택 해주세요.
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item href="#/action-1">제목 오름차순</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">제목 내림차순</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">평점 오름차순</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">평점 내림차순</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">인기도 오름차순</Dropdown.Item>
                                            <Dropdown.Item href="#/action-1">인기도 내림차순</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                    <Col sm = {9} className='movie-card-list'>
                        {filter.map(item => (
                            <Card style={{ width: '18rem' }} key={item.id}>
                                <Card.Img variant="top" src={`https://www.themoviedb.org/t/p/w220_and_h330_face${item.poster_path}`}  />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        개봉일 : {item.release_date}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
     )}

        
    </div>
  )
}

export default Movies