import React, { useContext } from 'react'
import { ColorContext } from '../context/colorContext'

const ColorList = () => {

    const {setCkColor} = useContext(ColorContext)
    const color = ['red', 'orange', 'yellow', 'green', 'blue']

  return (
    <div style={{display : 'flex'}}>
        {color.map(item => (
                    <div 
                        onClick={() =>{setCkColor(item)}}
                        key={item} style = {{
                        width : '100px',
                        height : '100px',
                        backgroundColor : item
                        }}>
                    </div>
        ))}
    </div>
  )
}

export default ColorList