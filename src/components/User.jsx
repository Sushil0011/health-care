import React from 'react'
import star from '../Assests/star.svg';
import man from '../Assests/man.svg';
const User = () => {
  return (
   <>
   <div className='user_card'>
<div className='inner'>
    <div className='innerInfo'>
        <div className='star'>
<img src={star} alt=""/>
<img src={star} alt=""/>
<img src={star} alt=""/>
<img src={star} alt=""/>
<img src={star} alt=""/>
        </div>
        <div className='profileImg'>
            <img src={man}  alt=""/>
            <div className='img_info'>
            <span>Dr.James L.</span>
            <span>psychologist, canada</span>
            </div>

        </div>
    </div>
    <div className='bottomLine'></div>
</div>
   </div>

   <div className='user_info'>
<div className='idea'>Bring new business in by getting more online reviews.</div>
<div className='intrest'>94% Use review to choose new doctor.</div>
   </div>

   </>

   
   
  )
}

export default User