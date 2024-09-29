// LIBRARIES
import React from 'react';
// STYLE
import './Header.css';
// COMPONENTS
import HeaderButton from './HeaderButton';

const Header = () => {
  return(
    <section className='Header'>
      <HeaderButton value={"Home"}/>
      <HeaderButton value={"Resume"}/>
      <HeaderButton value={"Timeline"}/>
      <HeaderButton value={"Projects"}/>
      <HeaderButton value={"About"}/>
      <HeaderButton value={"Contact"}/>
    </section>
  )
}


export default Header;