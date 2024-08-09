import React, { useContext } from 'react'
import { ModeContext } from '../../context/ModeContext'

const Footer = () => {

    const {isDark, setIsDark} = useContext(ModeContext)

  return (
    <div 
        className="footer"
        style={{
            backgroundColor : isDark == true ? "lightgray" : "black"
        }}> 
            <button className='button'
            style={{
                backgroundColor : isDark == true ? "black" : "white",
                color : isDark == true ? "white" : "black",
                fontSize : '15px',
                fontWeight : 'bold'
            }}
            onClick={isDark == true ? () => setIsDark(false) : 
                () => setIsDark(true)
            }>
               {isDark == true ? "다크모드" : "라이트모드"}
            </button>
          
    </div>
  )
}

export default Footer