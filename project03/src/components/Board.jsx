import React from 'react'

const Board = ({res,nick}) => {
  return (
    <div className='board-area'>
        <h3>{nick}</h3>
        <img src={`img/dice${res}.png`} />
    </div>
  )
}

export default Board