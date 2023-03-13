import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InboxIcon from '@mui/icons-material/Inbox';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import  { ForkRight } from '@mui/icons-material';
import Details from './Details';
import Tools from './Tools'
import Last from './Last_Card'
import glogo2 from '../Assests/glogo2.png'
import women from '../Assests/women.png'
import Bars from './Bars';
import Logo from './Logo';
import vlogo from '../Assests/trialvector.svg';
import glogo from '../Assests/Grouplogo.svg';
import User from './User';
import profile1 from '../Assests/profile1.svg'
import profile2 from '../Assests/profile2.svg'
import profile3 from '../Assests/profile3.svg'
import dummy from '../Assests/dummy.svg'
import { Icon } from '@mui/material';
import facebook from '../Assests/facebook.png'
import insta from '../Assests/insta.png'
import twitter from '../Assests/twitter.png'
import call from '../Assests/call.png'
import whatsapp from '../Assests/whatsapp.png'
import email from '../Assests/email.png'
import arrow from '../Assests/Vector.png'
import copy from '../Assests/copyrights.svg'
import carrow from '../Assests/carrow.svg';
import logo1 from '../Assests/logo1.svg';
import ellipse from '../Assests/ellipse1.svg';

const Home = () => {
  return (
    <div className='home'>
        <div className='about'>
<p>Medical software to attract <br></br> and  <span>retain patients</span> </p>
        </div>
        <div className='para'>
        Patientgrid’s communication platform helps improve patient experience while staff hours.
        </div>
        <div className='start'>start for free  <img src={carrow} alt=""/>
    </div>

    <div className='gradient'>
    </div>

    <div className='card'>
  <div className='leftside'>
  <div className='innerLeft'>

<div className='logo'>
  <img src={logo1} alt=""/>
  patientgrid
</div>


  <div className='name'>
    <span className='username'>   amanda charles</span>
    <span className='bar' ><span><ArrowDropDownIcon className='darrow'  style={{position:"relative", bottom:"8px",left:"116px"}}/></span></span>
  </div>
<div className='bars'>
  <InboxIcon/> <p>Inbox</p>
</div>

<div className='bar_container'>
<Bars/>
<Bars/>
<Bars/>
<Bars/>
<Bars/>



</div>
</div>
<div className='verticleLine'></div>


  </div>



  <div className='rightside'>

  <div className='bars'>
  <InboxIcon  className='inbox'/> <p>Inbox</p>
</div>
<div className='horiLine'></div>

<div className='btn_Wrapper'>
<div className='orderbtn'>
  <div className='order'> Order:</div>
  <div className='btn'><button>newest</button>
  <button>oldest</button>
  </div>
 
</div>
<div className='filterbtn'>
  <div className='filter'> Filter:</div>
  <div className='btn_container'><button>All</button>
  <button className='same'>Calls</button>
  <button  className='same'>Sms</button>
  <button className='same'>Voicemails</button>

  </div>
 
</div>

</div>
<div className='nameWrapper'>
<div className='title'>
  <span>Name</span>
  <span> Last Contact</span>

</div>


<Details image={profile1}  time={"20 Hours ago"} id={1} number={"(305) 440-0858"}/>
<Details    image={dummy}  time={"10 Hours ago"} id={7} number={"(304) 450-0258"}/>
<Details image={profile2}    time={"01 Hours ago"} id={2} number={"(325) 240-0998"}/>
<Details  image={profile3}   time={"10 Hours ago"} id={3} number={"(225) 440-0458"}/>
</div>

  </div>
    </div>
    
   <div className='users_container'>
   <div className='review'>
     <User/>
     </div>


  <div className='tools'>
<Tools/>

  </div>
<div className='last_card'>
<Last/>
</div>


    </div> 


    <div className='team'>
      <div className='team_info'>
<div className='para1'>Seamless collaboration for healthcare teams</div>
<div className='para2'>With shared inboxes, any team member can resolve the team’s pending tasks. Individual staff member don’t get overwhelmed and patients are always take care of.</div>
      </div>
      <div className='web_container'>
  <div className='rightside'>
     <div className='bars'>
      <div className='inbox_contain'>
       <InboxIcon className='inbox' /> <p>Inbox</p>
       </div>
       <div className='logo'><img src={glogo} alt=""/><p>patientgrid</p></div>
     </div>
     <div className='horiLine'></div>
     <div className='btn_Wrapper'>
       <div className='orderbtn'>
         <div className='order'> Order:</div>
         <div className='btn'><button>newest</button>
           <button>oldest</button>
         </div>
       </div>
       <div className='filterbtn'>
         <div className='filter'    > Filter:</div>
         <div className='btn_container'><button>All</button>
           <button className='same'>Calls</button>
           <button className='same'>Sms</button>
           <button className='same'>Voicemails</button>
         </div>
       </div>
     </div>
     <div className='nameWrapper'>
       <div className='title'>
         <span>Name</span>
         <span> Last Contact</span>
       </div>

       <div className='detailWrapper'>

       <div className='first_bar'><Details  image={ellipse} time={"20 Hours ago"} id={1} number={"(305) 440-0858"} /></div>
       <Details image={dummy} time={"10 Hours ago"} id={7} number={"(304) 450-0258"} />
       <Details image={dummy} time={"01 Hours ago"} id={2} number={"(325) 240-0998"} />
       <Details image={profile3} time={"10 Hours ago"} id={3} number={"(225) 440-0458"} />
    </div>
     </div>
   </div>
      </div>
    </div>



<div className='trial_box'>
  <div className='imageWrapper'>
  <img src={vlogo} alt=""/>
  <img src={vlogo} alt=""/>


<div className='image'>
<img src={women} alt=""/>

</div>
</div>

<div className='trialinfo'>
  <div className='para1'>We work on a month-to-month basis, try for free with no commitments</div>
 
  <div className='para2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
  <div className='trialbtn'><h3>14 Free Trial</h3></div>
</div>
</div>

<footer className='footer'>
  <div className='footer_info'>
    <div className='fir'>
    <div className='logo'>
      <img src={glogo2} alt=""/><span>patientgrid</span>
    </div>
    <div className='info'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
    </div>
    <div className='social'>

<img src={facebook} alt=""/>
<img src={insta} alt=""/>
<img src={twitter} alt=""/>

    </div>
    </div>


    <div className='sec'>
<div className='call'><img src={call} alt=''/>  +91-8853923455

</div>
<div className='whatsapp'><img src={whatsapp} alt=''/>+91-4567895478</div>
<div className='email'><img src={email} alt=''/>patientgrid@gmail.com</div>

    </div>
    <div className='three'>

      <span>Subscribe Newsletter</span>
      <div className='input'><span>Email</span>
      <div className='circle'><img src={arrow} alt=""/></div></div>
    </div>
  </div>
  <div className='border_info'>
<ul>
  <li>Products</li>
  <li>Plans</li>
  <li>More</li>

</ul>
  </div>
  <div className='rights'> <img src={copy} alt=""/> Copyright 2023.All Rights Reserved.</div>
</footer>

    
    </div>
  )
}

export default Home