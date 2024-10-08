import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Content = () => {
    const {isDark} = useContext(ModeContext)
  return (
    <div 
        className="content"
        style={{
            backgroundColor : isDark ? 'white' : 'black',
            color : isDark  ? 'black' : 'white'
        }}>
        <h3>집에가고 싶어요😥</h3>
    </div>
  )
}

export default Content