import React from 'react'
import './dropdown.css'

const Dropdown = ( {list}) => {
     let myComponent = list.map((item,index) => (<div className='elements' key={index}>
        <span className='image'> {item.image} </span>
        <span className='text'> {item.text} </span>
    </div>));
  return (
    <div className='drop_down'>
       {myComponent}
    </div>
  )
}

export default Dropdown