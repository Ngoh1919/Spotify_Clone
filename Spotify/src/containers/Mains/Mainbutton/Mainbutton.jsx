import React from 'react'
import './mainbutton.css'

const Mainbutton = ({color1,color2,borderR,label,len,wit}) => {
  return (
    <button 
         className='button_main'
         style={{
            backgroundColor:color1, 
            width:wit,
            height:len,        
            borderRadius: borderR }}>
        <span  className="button_mainSpan" style={{color:color2}}>
            {label}
        </span>
    </button>
  )
}

export default Mainbutton