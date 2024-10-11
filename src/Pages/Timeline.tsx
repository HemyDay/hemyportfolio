// LIBRARIES
import React from 'react';
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
      <h2>Timeline</h2>
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