import React from 'react'
import './audiocontrols.css'

const Audiocontrols = ( {logo,isplay} ) => {
  return (
    <button className={isplay ?'audio_buttonsPlay':'audio_buttons'}>
        <span>
          {logo}        
        </span>        
    </button>
  )
}

export default Audiocontrols