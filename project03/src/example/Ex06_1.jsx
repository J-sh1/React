import React from 'react'
import data from '../json/ex06.json'
import Ex06Card from '../components/Ex06Card'
import 'bootstrap/dist/css/bootstrap.min.css';

const Ex06_1 = () => {
    console.log('data')

    // 1. data.result 안에 있는 데이터들을 확인 후, 아이유/수지/나연에게 각각 Ex06Card를 부여하자. 
    // 2. 우리가 Ex05에서 <li></li>태그를 반복시켜준 것처럼, 이 예제에서는 Ex06Card를 반복시켜주면 된다. 
    // 3. props 개념을 통해 3개의 block 에 각각 다른 값을 전달해준다. 

  return (
    <div>
        {data.result.map(item =>
            <Ex06Card key={item.title} item={item}></Ex06Card>
        )}
    </div>
  )
}

export default Ex06_1



/*
컴포넌트 코드
import React from 'react'
import { Card, Button } from 'react-bootstrap'

const Ex06Card = ({item}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.imgSrc} height="350px" />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                    {item.content}
                </Card.Text>
                <Button variant="primary"
                        onClick={()=>{window.location.href=item.SNS}}>
                    Instagram
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Ex06Card

*/