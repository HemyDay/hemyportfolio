// LIBRARIES
import React from "react";
// STYLE
import "./Timeline.css";
// ASSETS
import EXPERIENCES from "../Assets/experiences.json"
//COMPONENTS
import TimelineItem from "../Components/TimelineItem";


const Timeline = () => {

  console.log(EXPERIENCES)

  return(
    <section className="Timeline">
      {
        EXPERIENCES.map(item => (
          <TimelineItem key={item.title} item={item} />
        ))
      }
    </section>
  )
}


export default Timeline;
