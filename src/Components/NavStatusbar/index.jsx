import React from 'react'
import './styles.css'

//i could have addded this in Reactpage but i did seperatly anyway
const NavStatusbar = () => {
  return (
    <div className='ContainerWapper'>
      {/* i am just adding the names statically for time sake later it should be changed dynamically */}
      <p>Courses</p>
      <p>&gt;</p>
      <p>Category</p>
      <p>&gt;</p>
      <p>MERN STACK</p>
    </div>
  )
}

export default NavStatusbar
