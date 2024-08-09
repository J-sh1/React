import React, { useContext } from 'react'
import { ColorContext } from '../context/colorContext'

const ColorResult = () => {
    const {ckColor} = useContext(ColorContext)
  return (
    <div>
        <div style={{
            width : '100px',
            height : '100px',
            backgroundColor : ckColor
            }}>
        </div>
    </div>
  )
}

export default ColorResult