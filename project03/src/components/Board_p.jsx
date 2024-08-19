import React from 'react'

const Board_p = ({res, name}) => {
  return (
    <div className='board-area'>
        <h3>{name}</h3>
        <img src={`/img/dice${res}.png`}></img>
    </div>
  )
}

export default Board_p