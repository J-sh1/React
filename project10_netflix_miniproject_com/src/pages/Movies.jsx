import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {Container, Row, Col, Accordion, Dropdown, Card, Button} from 'react-bootstrap'

const Movies = () => {

    const {popularMovies} = useSelector(state => state.movie)
    const [filter, setFilter] = useState([])

    /*
    자바스크립트 sort함수
    - 기본적으로 유니코드를 기반으로 정렬기준을 판단
    - compare함수를 직접 구현하여 정렬
    배열명.sort((a, b => {
        return a - b // 오름차순
    }))

    반환값 < 0 : a가 b보다 앞으로 이동
    반환값 == 0 : 순서변동 x
    반환값 > 0 : b가 a보다 앞으로 이동
    */

    const res = (categori) => {
        if (categori == 'strup') {
            setFilter(
                [...filter].sort((a, b) => {     
                    return a.title.localeCompare(b.title);
                })
            )
        } else if (categori == 'strdown') {
            setFilter(
                [...filter].sort((a, b) => {     
                    return b.title.localeCompare(a.title);
                })
            )
        } else if (categori == 'ratingup') {
            setFilter(
                [...filter].sort((a, b) => {     
                    return b.vote_average - a.vote_average;
                })
            )
        } else if (categori == 'ratingdown') {
            setFilter(
                [...filter].sort((a, b) => {     
                    return a.vote_average - b.vote_average;
                })
            )
        } else if (categori == 'popularup') {
            setFilter(
                [...filter].sort((a, b) => {     
                    return b.popularity - a.popularity;
                })
            )
        } else if (categori == 'populardown') {
            setFilter(
                [...filter].sort((a, b) => {     
                    return a.popularity - b.popularity;
                })
            )
        }
    } 

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
                                            <Dropdown.Item onClick={() => {res('strup')}}>제목 오름차순</Dropdown.Item>
                                            <Dropdown.Item onClick={() => {res('strdown')}}>제목 내림차순</Dropdown.Item>
                                            <Dropdown.Item onClick={() => {res('ratingup')}}>평점 오름차순</Dropdown.Item>
                                            <Dropdown.Item onClick={() => {res('ratingdown')}}>평점 내림차순</Dropdown.Item>
                                            <Dropdown.Item onClick={() => {res('popularup')}}>인기도 오름차순</Dropdown.Item>
                                            <Dropdown.Item onClick={() => {res('populardown')}}>인기도 내림차순</Dropdown.Item>
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