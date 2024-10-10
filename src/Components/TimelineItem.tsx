// LIBRARIES
import React from 'react';
// STYLE 
import './TimelineItem.css';

// ASSETS
import work from "../Assets/Icons/suitcase.svg";
import study from "../Assets/Icons/brain.svg";
import degree from "../Assets/Icons/certification.svg";

const TimelineItem = (props:any) => {

  const findRightIcon = (input:string) => {
    if (input === "work") return work;
    if (input === "study") return study;
    if (input === "degree") return degree;
  }

  return(<>

      <div className='timeline_header'>
        <p className='timeline_startDate'>{props.item.startDate}</p>
        <img className='timeline_icon' src={findRightIcon(props.item.area)} alt={props.item.area + "icon"}/>
        <p className='timeline_endDate'>{props.item.endDate}</p>
      </div>

      <div className='timeline_title'>{props.item.title}</div>
      <div className='timeline_type'>{props.item.type}</div>
      
      <div className='timeline_footer'>
        <p className='timeline_institution'>{props.item.institution}</p>
        <p className='timeline_city'>{props.item.city}</p>
      </div>

  </>)
}

export default TimelineItem;