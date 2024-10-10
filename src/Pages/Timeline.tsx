// LIBRARIES
import React, { useState } from 'react';
// STYLE
import './Timeline.css';
// COMPONENTS
import Container from '../Components/Container';
import TimelineItem from '../Components/TimelineItem';
// DATA
import EXPERIENCES from "../Assets/Data/experiences.json"


const Timeline = () => {

  return(
    <section >
      <h1>Timeline</h1>
      {
        EXPERIENCES.map(item => (
          <Container key={item.title}>
            <TimelineItem item={item}/>
          </Container>
        ))
      }

    </section>
  )
}

export default Timeline;