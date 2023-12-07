import React from 'react'
import './styles.css'

const MERNStackDevelopment = () => {
  return (
    <div className='MsdContainer'>
      <h1>MERN Stack Development</h1>
      <p>Become a master in MERN Stack development with our comprehensive course.</p>
      <div className='boxWrapper'>
        <p>this is something</p>
      </div>
      <div className='logoholder'>
        <div id='logodiv'>
            <img src={require('./Mongologo.png')} />
        </div>
        <div id='logodiv'>
            <img src={require('./expresslogo.png')} />
        </div>
        <div id='logodiv'>
            <img src={require('./reactlogo.png')} />
        </div>
        <div id='logodiv'>
            <img src={require('./nodelogo.png')} />
        </div>
        
      </div>
    </div>
  )
}

export default MERNStackDevelopment
