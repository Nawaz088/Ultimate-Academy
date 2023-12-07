import React from 'react'
import './index.css'
const Form = () => {
  return (
    <div className='formWrapper'>
      <div className='form'>
        <p><span>Join</span> our Learning Network</p>
        <form className='formstyle'>
            <span id='placenames'>Name</span>
            <input 
                type='text'
                placeholder='sjdasf'/>
            <span id='placenames'>Mobile Number</span>
            <input 
                type='number'
                placeholder='something'/>
            <span id='placenames'>Email</span>
            <input 
                type='text'
                placeholder='something'/>
        </form>
        <button className='formbutton'>Join</button>
      </div>
        
    </div>
  )
}

export default Form
