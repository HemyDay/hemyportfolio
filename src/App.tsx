// LIBRARIES
import React, { useState } from 'react';
// STYLE
import './App.css';
// COMPONENTS
import Header from './Components/Header';

const App = () => {
  const [MENU_OPEN, setMENU_OPEN] = useState(false);
  const toggleMenu = () => {setMENU_OPEN(!MENU_OPEN)}
  
  return(<>
    <Header 
      MENU_OPEN={MENU_OPEN} 
      setMENU_OPEN={setMENU_OPEN} 
      toggleMenu={toggleMenu}
    />

    <section 
      className='PageBody'
      style={{ 
        display: MENU_OPEN===true? 'none' : 'block' 
      }}
    >  
      <div> 
        Hello World 
      </div>  
    </section>

  </>)
}


export default App;
