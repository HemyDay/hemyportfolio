// LIBRARIES
import React from 'react';
// STYLE
import './PageStructure.css';
// COMPONENTS
import Header from './Components/Header';


const PageStructure = () => {
  return(
    <body>
      <Header/>
      <section> this is the body</section>
      <footer> this is the footer</footer>
    </body>
  )
}


export default PageStructure;