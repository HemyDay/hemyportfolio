// LIBRARIES
import React from 'react';
// STYLE
import './PageStructure.css';
// COMPONENTS
import Header from './Header';
// VIEWS
import ViewTimeline from '../Views/ViewTimeline';


const PageStructure = () => {
  return(
    <section>
      <Header/>
      <section className='ViewBody'>
        <ViewTimeline/>
      </section>
      <footer> this is the footer</footer>
    </section>
  )
}


export default PageStructure;