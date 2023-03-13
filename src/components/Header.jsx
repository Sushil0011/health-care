import React from 'react'
import Logo from './Logo'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header = () => {
  return (
    <div className='navbar'>
<Logo/>
<div className='menus'>
  <ul>
    <li>Products</li>
    <li>Plans</li>
    <li >More  <ArrowDropDownIcon className='downarrow'
    
     /></li>
  </ul>
</div>

<div className='login'>
Login
  <div className='demo'>Request a demo</div>
</div>

    </div>
  )
}

export default Header