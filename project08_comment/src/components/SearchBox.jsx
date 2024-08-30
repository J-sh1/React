import React, { useRef } from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { posterActions } from '../redux/reducer/postSlice'

const SearchBox = () => {

    const dispatch = useDispatch()
    const searchRef = useRef()

    const handleSearch = ()=>{
        // console.log('keyword', searchRef.current.value)
        // dispatch({
        //     type : 'searchKeyword', 
        //     payload : searchRef.current.value
        // })

        dispatch(posterActions.searchKeyword(searchRef.current.value))
    }
    return (
        <div>
            <Row className="g-2">
                <Col md>
                    <Form.Control type="text" placeholder="작성자 검색" ref={searchRef}/>
                </Col>
                <Col md>
                    <Button variant="primary" onClick={handleSearch}>Search</Button>
                </Col>
            </Row>
        </div>
    )
}

export default SearchBox