import React from 'react'
import star from '../Assests/star.svg';
import man from '../Assests/man.svg';
import draw from '../Assests/draw.svg'

import settingicon from '../Assests/settings.svg'

const User = () => {
  return (
   <>
   <div className='tool_card'>
<div className='inner'>
    <div className='innerInfo'>
        <div className='toolheader'>
<div className='circle'></div>
<div className='progress_bar'>
    <span className='progress'></span>
    <span className='progress_color'></span>

    <span className='bottomline'></span>
</div>
        </div>
        <div className='chartbar'>
           
           <div className='firstchart'></div>
           <div className='secondchart'></div>
           <div className='thirdchart'></div>
           <div className='fourthchart'> </div>
           <div  className='fifthchart'></div>

           
           
           

        </div>
    </div>
    <div className='bottomLine'></div>
</div>
   </div>

   <div className='chartInfo'>
<div className= 'para1'>Save time with collaborative tools and automations.</div>
<div className='para2'>15+ Staff hours saved per week.</div>
   </div>
   <div className='setting'>    <img src={settingicon} alt=""/>
   <img src={draw} alt=""/>
</div>

   </>

   
   
  )
}

export default User