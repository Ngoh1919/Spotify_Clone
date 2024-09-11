import React from 'react'
import './main.css'
import Mainbutton from './Mainbutton/Mainbutton'


const Main = () => {
  const svgs = [
    <svg className='main_right' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000" height="20px" width="20px" version="1.1" id="Layer_1" viewBox="0 0 330 330" xmlSpace="preserve"><path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001  c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213  C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606  C255,161.018,253.42,157.202,250.606,154.389z"/></svg>,
    <svg className='main_left' fill="#000000" height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 330.002 330.002" xmlSpace="preserve" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_226_" d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21 l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001 c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"></path> </g></svg>,
    <div className='install_app'><span><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI"><path d="M4.995 8.745a.75.75 0 0 1 1.06 0L7.25 9.939V4a.75.75 0 0 1 1.5 0v5.94l1.195-1.195a.75.75 0 1 1 1.06 1.06L8 12.811l-.528-.528a.945.945 0 0 1-.005-.005L4.995 9.805a.75.75 0 0 1 0-1.06z"></path><path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-6.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13z"></path></svg></span><a>Install App</a></div>,
    <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI"><path d="M8 1.5a4 4 0 0 0-4 4v3.27a.75.75 0 0 1-.1.373L2.255 12h11.49L12.1 9.142a.75.75 0 0 1-.1-.374V5.5a4 4 0 0 0-4-4zm-5.5 4a5.5 5.5 0 0 1 11 0v3.067l2.193 3.809a.75.75 0 0 1-.65 1.124H10.5a2.5 2.5 0 0 1-5 0H.957a.75.75 0 0 1-.65-1.124L2.5 8.569V5.5zm4.5 8a1 1 0 1 0 2 0H7z"></path></svg>,
    <div><span className='first_letterName'>A</span></div>,
    <a className='insta'><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dCAvla"><path d="M8 1.44c2.136 0 2.389.009 3.233.047.78.036 1.203.166 1.485.276.348.128.663.332.921.598.266.258.47.573.599.921.11.282.24.706.275 1.485.039.844.047 1.097.047 3.233s-.008 2.389-.047 3.232c-.035.78-.166 1.204-.275 1.486a2.654 2.654 0 0 1-1.518 1.518c-.282.11-.706.24-1.486.275-.843.039-1.097.047-3.233.047s-2.39-.008-3.232-.047c-.78-.035-1.204-.165-1.486-.275a2.477 2.477 0 0 1-.921-.599 2.477 2.477 0 0 1-.599-.92c-.11-.282-.24-.706-.275-1.486-.038-.844-.047-1.096-.047-3.232s.009-2.39.047-3.233c.036-.78.166-1.203.275-1.485.129-.348.333-.663.599-.921a2.49 2.49 0 0 1 .92-.599c.283-.11.707-.24 1.487-.275.843-.038 1.096-.047 3.232-.047L8 1.441zm.001-1.442c-2.172 0-2.445.01-3.298.048-.854.04-1.435.176-1.943.373a3.928 3.928 0 0 0-1.417.923c-.407.4-.722.883-.923 1.417-.198.508-.333 1.09-.372 1.942C.01 5.552 0 5.826 0 8c0 2.172.01 2.445.048 3.298.04.853.174 1.433.372 1.941.2.534.516 1.017.923 1.417.4.407.883.722 1.417.923.508.198 1.09.333 1.942.372.852.039 1.126.048 3.299.048 2.172 0 2.445-.01 3.298-.048.853-.04 1.433-.174 1.94-.372a4.087 4.087 0 0 0 2.34-2.34c.199-.508.334-1.09.373-1.942.039-.851.048-1.125.048-3.298s-.01-2.445-.048-3.298c-.04-.853-.174-1.433-.372-1.94a3.924 3.924 0 0 0-.923-1.418A3.928 3.928 0 0 0 13.24.42c-.508-.197-1.09-.333-1.942-.371-.851-.041-1.125-.05-3.298-.05l.001-.001z"></path><path d="M8 3.892a4.108 4.108 0 1 0 0 8.216 4.108 4.108 0 0 0 0-8.216zm0 6.775a2.668 2.668 0 1 1 0-5.335 2.668 2.668 0 0 1 0 5.335zm4.27-5.978a.96.96 0 1 0 0-1.92.96.96 0 0 0 0 1.92z"></path></svg></a>,
    <a className='twit'><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dCAvla"><path d="M13.54 3.889a2.968 2.968 0 0 0 1.333-1.683 5.937 5.937 0 0 1-1.929.738 2.992 2.992 0 0 0-.996-.706 2.98 2.98 0 0 0-1.218-.254 2.92 2.92 0 0 0-2.143.889 2.929 2.929 0 0 0-.889 2.15c0 .212.027.442.08.691a8.475 8.475 0 0 1-3.484-.932A8.536 8.536 0 0 1 1.532 2.54a2.993 2.993 0 0 0-.413 1.523c0 .519.12 1 .361 1.445.24.445.57.805.988 1.08a2.873 2.873 0 0 1-1.373-.374v.04c0 .725.23 1.365.69 1.92a2.97 2.97 0 0 0 1.739 1.048 2.937 2.937 0 0 1-1.365.056 2.94 2.94 0 0 0 1.063 1.5 2.945 2.945 0 0 0 1.77.603 5.944 5.944 0 0 1-3.77 1.302c-.243 0-.484-.016-.722-.048A8.414 8.414 0 0 0 5.15 14c.905 0 1.763-.12 2.572-.361.81-.24 1.526-.57 2.147-.988a9.044 9.044 0 0 0 1.683-1.46c.5-.556.911-1.155 1.234-1.798a9.532 9.532 0 0 0 .738-1.988 8.417 8.417 0 0 0 .246-2.429 6.177 6.177 0 0 0 1.508-1.563c-.56.249-1.14.407-1.738.476z"></path></svg></a>,
    <a className='facebook'><svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 16 16" className="Svg-sc-ytk21e-0 dYnaPI"><path d="M16 8a8 8 0 1 0-9.25 7.903v-5.59H4.719V8H6.75V6.237c0-2.005 1.194-3.112 3.022-3.112.875 0 1.79.156 1.79.156V5.25h-1.008c-.994 0-1.304.617-1.304 1.25V8h2.219l-.355 2.313H9.25v5.59A8.002 8.002 0 0 0 16 8z"></path></svg></a>
  ]

  return (
    <div className='main_section'>
      <div className='main_sectionNav'>
        <div className='main_sectionNav1'>
          <div className='fowardBack'>
            <Mainbutton color1="black" color2="white" borderR="50%" label={svgs[1]} len="32px" wit="32px"/>
            <Mainbutton color1="black" color2="white" borderR="50%" label={svgs[0]} len="32px" wit="32px"/>
          </div>
          <div className='signin'>
            <Mainbutton color1="white" color2="black" borderR="20px" label="Explore Premium" len="30px" wit="130px"/>
            <Mainbutton color1="black" color2="white"  borderR="20px" label={svgs[2]} len="30px" wit="110px"/>
            <Mainbutton color1="black" color2="white" borderR="50%" label={svgs[3]} len="32px" wit="32px"/>
            <Mainbutton color1="black" color2="white" borderR="50%" label={svgs[4]} len="48px" wit="48px"/>
          </div>          
        </div>
        <div className='main_sectionNav2'>
          <Mainbutton color1="#191919" color2="white" borderR="20px" label="All" len="30px" wit="45px"/>
          <Mainbutton color1="#191919" color2="white" borderR="20px" label="Music" len="30px" wit="65px"/>
          <Mainbutton color1="#191919" color2="white" borderR="20px" label="Podcast" len="30px" wit="80px"/>          
        </div>


      </div>
      <div className='main_sectionSongs'>
           

      </div>
      <footer>
        <div className='main_footer'>
          <div className='main_footerContent'>
            <div className='main_footerLinks'>
              <h4>Company</h4>
              <h6>About</h6>
              <h6>Jobs</h6>
              <h6>For the records</h6>
            </div>
            <div className='main_footerLinks'>
              <h4>Communities</h4>
              <h6>For Artists</h6>
              <h6>Developers</h6>
              <h6>Advertising</h6>
              <h6>Investors</h6>
              <h6>Vendors</h6>
            </div>
            <div className='main_footerLinks'>
              <h4>Useful links</h4>
              <h6>Support</h6>
              <h6>Free Mobile</h6>
              <h6>App</h6>
            </div>
            <div className='main_footerLinks'>
              <h4>Spotify Plans</h4>
              <h6>Premium Individual</h6>
              <h6>Premium Duo</h6>
              <h6>Premium Family</h6>
              <h6>Premium Student</h6>
              <h6>Spotify Free</h6>
            </div>
           
          </div>
          <div className='footer_logo'>
           
              <Mainbutton color1="#191919" color2="white" borderR="50%" label={svgs[5]} len="40px" wit="40px"/>
            
              <Mainbutton color1="#191919" color2="white" borderR="50%" label={svgs[6]} len="40px" wit="40px"/>
            
              <Mainbutton color1="#191919" color2="white" borderR="50%" label={svgs[7]} len="40px" wit="40px"/>
            
          </div>

        </div>
        <div className='footer_seperateOut'>
          <div className='footer_seperate'></div>
        </div>
        
        <div className='sub_footer'>
          <div className='legal-actions'>
            <ul className='legal-actionsUl'>
              <li>Legal</li>
              <li>Safety $ Privacy Center</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>About Ads</li>
              <li>Accessibility</li>
            </ul>
          </div>
          <div className='copy_write'>
            <h5>&#169; 2024 spotify AB</h5>
          </div>

        </div>

      </footer>

    </div>
  )
}

export default Main