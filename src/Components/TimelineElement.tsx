// LIBRARIES
import React from 'react';
// STYLE
import './TimelineElement.css';
// COMPONENTS

const TimelineElement = (
  start:number, 
  end:number, 
  title:string,
  date:string,
  location:string,
  city:string,
  type:'work'|'study'
) => {
  return(
    <div 
      className="TimelineElement" 
      style={{
        gridRowStart:start, 
        gridRowEnd:end, 
        gridColumn:type === 'work' ? 1 : 3
      }}
    >
      DIPLOME DEV
      </div>
  )
}

export default TimelineElement;