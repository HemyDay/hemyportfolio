// LIBRARIES
import React from 'react';
// STYLE
import './TimelineItem.css';

const TimelineItem = (props:any) => {
  return(
    <div className='TimelineItem'> 
      <p>{props.item.type}</p>
      <p>{props.item.title}</p>
    </div>
  )
}


export default TimelineItem;
