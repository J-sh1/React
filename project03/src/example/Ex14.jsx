import React, { Component } from 'react'

export default class Ex14 extends Component {

    /*
    Class Component
    - React는 Class, Function 모두 사용 가능
    - state, LifeCycle 등은 함수형에는 없다.
    - 리액트 훅이 도입되면서 그 기능들을 함수형에서도 사용할 수 있게 되었다.
    - use ~ => 리액트 훅

    - 함수형 프로그래밍이 유행하게 되면서 React에서도 도입하기 위해
        리액트 훅이 생겨나게 됨
    */

    componentDidMount(){
        console.log('3. componentDidMount')
    }

    componentDidUpdate(){
        console.log('4. componentDidUpdate')
    }

    // 생성자
    constructor(props){
        super(props)
        console.log('1.constructor')
        this.state = {
            num : 0
        }
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    handleIncrement(){
        this.setState({
            nun : this.state.num += 1
        })
    }

    handleDecrement(){
        this.setState({
            nun : this.state.num > 0 ? this.state.num -= 1 : this.state.num = 0
        })
    }

  render() {
    console.log('2.render')
    return (
      <div>
        <h1>Count {this.state.num}</h1>
        <button onClick={this.handleIncrement}>+1</button>
        <button onClick={this.handleDecrement}>-1</button>
      </div>
    )
  }
}