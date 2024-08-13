import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'


const Header = () => {
    const {isDark} = useContext(ModeContext)
  return (
    <div 
    className="header"
    style={{
        backgroundColor : isDark ? 'skyblue' : 'black',
        color : isDark ? 'black' : 'white'
    }}>
        <h1>인공지능사관학교</h1>
    </div>
  )
}

export default Header