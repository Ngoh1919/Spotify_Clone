import React, { useState } from 'react';
import './library.css';
import Createplay from './CreatePlay/Createplay';
import Dropdown from './Dropdown/Dropdown';
import PLaylist from './Playlist/PLaylist';

const Library = () => {
  const [isPlus, setIsplus] = useState(false);
  const [onExtend, setOnextend] = useState(false)
  const onAdd = () => {
    setIsplus(!isPlus);
  }
  const onExp = () =>{
    setOnextend(!onExtend)
  }

  const myComp = [
    {
      image: <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-music"><path d="M2 0v2H0v1.5h2v2h1.5v-2h2V2h-2V0H2zm11.5 2.5H8.244A5.482 5.482 0 0 0 7.966 1H15v11.75A2.75 2.75 0 1 1 12.25 10h1.25V2.5zm0 9h-1.25a1.25 1.25 0 1 0 1.25 1.25V11.5zM4 8.107a5.465 5.465 0 0 0 1.5-.593v5.236A2.75 2.75 0 1 1 2.75 10H4V8.107zM4 11.5H2.75A1.25 1.25 0 1 0 4 12.75V11.5z"></path></svg>,
      text:  "Create a new playlist"      
    },
    {
      image:<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-folder"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v11.5C0 15.216.784 16 1.75 16h12.5A1.75 1.75 0 0 0 16 14.25v-9.5A1.75 1.75 0 0 0 14.25 3H7.82l-.65-1.125A1.75 1.75 0 0 0 5.655 1H1.75zM1.5 2.75a.25.25 0 0 1 .25-.25h3.905a.25.25 0 0 1 .216.125L6.954 4.5h7.296a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25V2.75z"></path></svg>,
      text: "Create a playlist folder"
    }
  ]  
  return (
    <div className='library_section' style={onExtend?{minWidth:"500px"}:null}>
      <div className='library_sectionTop'>
        <button className='collapse'>
          <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" className="Svg-library"><path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path></svg>
          <h4 className='library_text'>Your Library</h4>
        </button>
        <div className='library_buttons'>
          <div>
            <button className='plus' onClick={onAdd}>
              <span>
                <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-plus"><path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path></svg>
              </span>
            </button>
            {isPlus?<Dropdown list={myComp} />:null}
          </div>

          {/*<Dropdown list={myComp} />
             <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" class="Svg-sc-ytk21e-0 cAMMLk"><path d="M8.81 1A.749.749 0 0 0 7.53.47L0 7.99l7.53 7.521a.75.75 0 0 0 1.234-.815.75.75 0 0 0-.174-.243L2.87 8.74h12.38a.75.75 0 1 0 0-1.498H2.87l5.72-5.713c.14-.14.22-.331.22-.53z"></path></svg>
          */}
          <button className='extend' onClick={onExp}>
            <span>
              <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-extend"><path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path></svg>
            </span>
          </button>
        </div>
      </div> 
      <div className='library_sectionSecond'>
        <div className='playlist_searchRecent'>

        </div>
        <div className='playlist_songs'>
            <Createplay 
               title="Create your first playlist" 
               describe="It's easy, we'll help you"
               buttonText="Create playlist" />
            <Createplay
               title="Let's find some podcasts to follow" 
               describe="We'll keep you updated on new episodes"
               buttonText="Browse podcasts"            
            />
            
        </div>
      </div>     
    </div>
  )
}

export default Library