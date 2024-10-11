// LIBRARIES
import React from 'react';
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
            <a onClick={() => props.setCURRENT_PAGE(props.changePage("Resume"))}>Resume</a>
            <a onClick={() => props.setCURRENT_PAGE(props.changePage("Timeline"))}>Timeline</a>
            <a onClick={() => props.setCURRENT_PAGE(props.changePage("Projects"))}>Projects</a>
            <a onClick={() => props.setCURRENT_PAGE(props.changePage("Contact"))}>Contact</a>
          </div>

        </div>
        
      </section>
    )
    
}


export default Header;
