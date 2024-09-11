import React from 'react'
import { Audio,Library, Nav } from './components';
import { Mains } from './containers';
import './App.css'

const App = () => {
  return (
    <div className='full_page'>
      <div className='containers'>
        <div className='left_container'>
          <div className='web_navigation'>
            <Nav />            
          </div>
          <div className='playlist_library'>
            <Library />
          </div>
        </div>
        <div className='main_container'>
          <Mains />
        </div>
        <div className='right_container'>

        </div>
        
      </div>

      <div className='audio_controls'>
          <Audio />
      </div>
    </div>

  )
}

export default App
