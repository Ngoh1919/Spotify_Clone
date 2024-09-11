import React from 'react'
import './createplay.css'

const Createplay = (texts) => {
  return (
    <div className='creating_playlist'>
      <div className='creating_playlistText'>
        <h1>{texts.title}</h1>
        <h6>{texts.describe}</h6>        
      </div>
      <div className='creating_playlistDiv'>
        <button className='create_browse'>{texts.buttonText}</button>        
      </div>

    </div>
  )
}

export default Createplay