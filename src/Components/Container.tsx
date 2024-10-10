// LIBRARIES
import React, { useState } from 'react';
// STYLE
import './Container.css';
// COMPONENTS


const Container = (props:any) => {

  return(
    <section className='container'>
      {props.children}
    </section>
  )
}

export default Container;