// LIBRARIES
import React from 'react';
// STYLE
import './TimelineElement.css';
// COMPONENTS

const TimelineElement = (props:any) => {
  return(
    <div 
      className="TimelineElement" 
      style={{
        gridRowStart:props.start, 
        gridRowEnd:props.end, 
        gridColumn:props.type === 'work' ? 3 : 1,
      }}
    >
      <div className='title' style={{
        borderTop:props.type === 'work' ? '4px solid #B17457' : ' 4px solid #86AB89',
        gridTemplateColumns:props.type === 'work' ? '60px auto' : 'auto 60px'
      }}
      >
        <h2 
          style={{
            gridRow:1,
            gridColumn:props.type === 'work' ? 2 : 1,
          }}>
            {props.title}
          </h2>
        <span 
          style={{
            gridRow:1,
            gridColumn:props.type === 'work' ? 1 : 2,
            textAlign:props.type === 'work' ? "left" : "right",
          }}>
            {props.date}
          </span>
      </div>
      {/* <div>
        <span >{props.city}</span>
        <span >{props.location}</span>
      </div> */}
      
    </div>
  )
}

export default TimelineElement;