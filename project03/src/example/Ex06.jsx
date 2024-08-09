import React from 'react'
import data from '../json/ex06.json'
import Ex06Card from '../components/Ex06Card'
import 'bootstrap/dist/css/bootstrap.min.css'

const Ex06 = () => {

    // let list = data.result
    // console.log(list)
    // let sns = list.map(item => <a>{item.SNS}</a>)
    // let title = list.map(item => <a>{item.title}</a>)
    // let birthYear = list.map(item => <a>{item.birthYear}</a>)
    // let content = list.map(item => <a>{item.content}</a>)
    // let imgSrc = list.map(item => <a>{item.imgSrc}</a>)

    let test = data.result.map(item => <Ex06Card 
                                    key = {item.title}
                                    sns = {item.SNS} 
                                    title = {item.title}
                                    birthYear = {item.birthYear} 
                                    content = {item.content}
                                    imgSrc = {item.imgSrc}
                                    />)
    // console.log(test)

    // console.log(sns[0].props.children)
    // console.log(data.result[0].SNS)
    let newResult = data.result.filter(item => item.birthYear <= 1994)
    
    let newResult2 = newResult.map(item =><Ex06Card 
                                    key = {item.title}
                                    sns = {item.SNS} 
                                    title = {item.title}
                                    birthYear = {item.birthYear} 
                                    content = {item.content}
                                    imgSrc = {item.imgSrc}
        />)

  return (
    <div>
        <h1>목록</h1>
        <div style={{display:'flex'}}>
            {test}
            {/* <Ex06Card sns = {sns[0].props.children} title = {title[0].props.children} birthYear = {birthYear[0].props.children} content = {content[0].props.children} imgSrc = {imgSrc[0].props.children} />
            <Ex06Card sns = {sns[1].props.children} title = {title[1].props.children} birthYear = {birthYear[1].props.children} content = {content[1].props.children} imgSrc = {imgSrc[1].props.children} />
            <Ex06Card sns = {sns[2].props.children} title = {title[2].props.children} birthYear = {birthYear[2].props.children} content = {content[2].props.children} imgSrc = {imgSrc[2].props.children} /> */}

        </div>
        <h1>1994년생 보다 나이가 많거나 같은 경우</h1>
        {/*
            1. 우리가 가진 data.result 안에서 1994년생 보다 나이가 많거나 같은 경우만
                따로 뽑아서 newResult 로 선언
            2. newResult를 기준으로 map함수를 통해 카드 생성
        */}
        <div style={{display:'flex'}}>
            {newResult2}
        </div>
    </div>
  )
}

export default Ex06