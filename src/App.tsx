// LIBRARIES
import React, { useState } from 'react';
// STYLE
import './App.css';
// COMPONENTS
import Header from './Components/Header';
// PAGES
import Timeline from './Pages/Timeline';
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';

const App = () => {

  const [MENU_OPEN, setMENU_OPEN] = useState(false);
  const toggleMenu = () => {setMENU_OPEN(!MENU_OPEN)}

  const changePage = (input:string) => {
    switch(input){
      case 'Resume': setMENU_OPEN(false); return <Resume />;
      case 'Projects': setMENU_OPEN(false); return <Projects />;
      case 'Contact': setMENU_OPEN(false); return <Contact />;
      case 'Timeline': setMENU_OPEN(false); return <Timeline />;
      default: return <Projects />;
    }
  }

  
  const [CURRENT_PAGE, setCURRENT_PAGE] = useState(changePage(''));


  
  return(<>
    <Header 
      MENU_OPEN={MENU_OPEN} 
      setMENU_OPEN={setMENU_OPEN} 
      toggleMenu={toggleMenu}
      setCURRENT_PAGE={setCURRENT_PAGE}
      changePage={changePage}
    />

    <section 
      className='PageBody'
      style={{ 
        display: MENU_OPEN===true? 'none' : 'block' 
      }}
    >  
      {CURRENT_PAGE}
    </section>

  </>)
}


export default App;
