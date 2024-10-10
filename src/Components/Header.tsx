// LIBRARIES
import React, { useState } from 'react';
// STYLE
import './Header.css';
// COMPONENTS

//ASSETS
import hamburger from '../Assets/Icons/hamburger.svg'
import close from '../Assets/Icons/close.svg'


const Header = (props:any) => {

    return(
      <section 
        className='Header' 
        data-displaytype={props.MENU_OPEN}
        style={{ 
          height: props.MENU_OPEN===true? '100vh':'min-content'
        }}
      > 
        <div className='InnerHeader'>
          <div className='MainHeader'>
            <span>Amanda SIRE</span>
            <img 
              className='icon' 
              src={props.MENU_OPEN===true? close : hamburger } 
              alt={'Toggle menu'} 
              onClick={props.toggleMenu}
            />    
          </div>
            
          <div 
            className='MenuLinks' 
            style={{ 
              display: props.MENU_OPEN===true? 'block' : 'none' 
            }}
          >
            <a>Home</a>
            <a>Resume</a>
            <a>Timeline</a>
            <a>Projects</a>
            <a>About</a>
            <a>Contact</a>
          </div>

        </div>
        
      </section>
    )
    
}


export default Header;
