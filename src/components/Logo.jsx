import React from 'react'
import logo1 from '../Assests/flogo.svg'
import mid from '../Assests/mid.svg'
import bottom from '../Assests/bottom.svg'

const Logo = () => {
  return (
    <>
      <div className='logo'>
        <span className='logo_span'>
          <img src={logo1} />
        </span>
        <div className='logo_name'> patientgrid</div>
      </div>
    </>

  )
}

export default Logo;