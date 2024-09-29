// LIBRARIES
import React from 'react';
// STYLE
import './Timeline_Dates.css';

const TimelineDates = () => {

  let StoredDate = new Date(2024,8);
  let TimelineDates = []

  for (let i = 0; i < 110; i++) {
    StoredDate = new Date(StoredDate.setMonth(StoredDate.getMonth() - 1))
    TimelineDates.push(StoredDate)
  }

  TimelineDates.splice(-1)

  TimelineDates = TimelineDates.map(date => (
    <div className='DateDisplay' key={date.toString()} style={date.getMonth() === 0 ? {fontWeight:'bold'} : {fontWeight:'normal'}}>{date.toLocaleString('fr-FR',{month:'short', year:'numeric'})}</div>
  ));


  return(
    <section className='TimelineDates'>
      {TimelineDates}
    </section>
  )
}


export default TimelineDates;