// LIBRARIES
import React from 'react';
// STYLE
import './TimelineItem.css';
// ASSETS
import degree from '../Assets/Icons/degree.svg'
import work from '../Assets/Icons/work.svg'
import study from '../Assets/Icons/study.svg'

const TimelineItem = (props:any) => {

  let icon = work;

  switch (props.item.area) {
    case 'study':
      icon = study;
      break;
    case 'degree':
      icon = degree;
      break;
    case 'work':
      icon = work;
      break;
    default:
      icon = work;
    break;
  }

  return(
    <div className='TimelineItem'> 
      <div className='topDateAndType'>
        <p className='dateStart' >{props.item.startDate}</p>
        <p className='type'>{props.item.type}</p>
        <p className='dateEnd'>{props.item.endDate}</p>
      </div>
      <img className='areaicon' src={icon} alt={props.item.area + "icon"}/>
      <p className='title'>{props.item.title}</p>

      <p className='institution'>{props.item.institution}</p>
      <p className='city' >{props.item.city}</p>
      
      <p className="readMore">Voir plus</p>
      
    </div>
  )
}


export default TimelineItem;
