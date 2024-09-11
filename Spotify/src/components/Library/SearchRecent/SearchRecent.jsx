import React from 'react'

const SearchRecent = () => {
  return (
        <div >
          <div className='playlist_title'>
            <button className='playlist_button'><span>Playlists</span></button>
          </div> 
          <div className='playlist_search'>
            <div className='searchPlayBg'>
              <svg data-encore-id="icon" role="img" aria-hidden="true" className="Svg_searchPlay" viewBox="0 0 16 16"><path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path></svg>
            </div>
            
            <div className='recents'>
              <h4>Recents</h4>
              <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg_list"><path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path></svg>
            </div>
          </div>
        </div>        
  )
}

export default SearchRecent