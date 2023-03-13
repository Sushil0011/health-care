import React from 'react'
import call from '../Assests/call.svg';
const Details = ({time,number,id,image}) => {
  return (
    <div className='detail'>
        <div className='profile'>
          <img src={image}/>
            <span>{number}</span>
        </div>
        <div className='callLogo'><img src={call} alt=""/>
        <span>{id}</span>
        </div>
        <div className='time'>{time}</div>
    </div>
  )
}

export default Details