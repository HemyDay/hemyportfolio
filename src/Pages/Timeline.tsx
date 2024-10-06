// LIBRARIES
import React from "react";
// STYLE
import "./Timeline.css";
// ASSETS
import EXPERIENCES from "../Assets/Data/experiences.json"
//COMPONENTS
import TimelineItem from "../Components/TimelineItem";


const Timeline = () => {

  console.log(EXPERIENCES)

  return(
    <section className="Timeline">
      <h2>Timeline</h2>
      <p>Historique de mes activités professionnelles et académiques depuis l'obtention du Baccalauréat en 2015.</p>
      {
        EXPERIENCES.map(item => (
          <TimelineItem key={item.title} item={item} />
        ))
      }
    </section>
  )
}


export default Timeline;
