// LIBRARIES
import React from 'react';
// STYLE
import './ViewTimeline.css';
// COMPONENTS
import TimelineDates from '../Components/Timeline_Dates';

const ViewTimeline = () => {
  return(
    <section className='View_Timeline'> 
      <section className='TimelineStudy'>
        <div style={{gridRowStart:1, gridRowEnd:2}}>DIPLOME DEV</div>
        <div style={{gridRowStart:2, gridRowEnd:12}}>Beweb</div>
        <div style={{gridRowStart:19, gridRowEnd:24}}>FLE</div>
        <div style={{gridRowStart:26, gridRowEnd:36}}>FDE</div>
        <div style={{gridRowStart:37, gridRowEnd:38}}>LICENCE 3 SDL CMM</div>
        <div style={{gridRowStart:38, gridRowEnd:60}}>SDL CMM</div>
        <div style={{gridRowStart:75, gridRowEnd:84}}>CQP</div>
        <div style={{gridRowStart:86, gridRowEnd:108}}>SDL CMM</div>
        <div style={{gridRowStart:109, gridRowEnd:110}}>Baccalauréat Littéraire</div>
      </section>
      <TimelineDates/>
      <section className='TimelineWork'>
      
        <div style={{gridRowStart:3, gridRowEnd:6}}>STAGE : Développeuse Web</div>
        <div style={{gridRowStart:12, gridRowEnd:19}}>Assistante d'Education</div>
        <div style={{gridRowStart:20, gridRowEnd:25}}>Animatrice Périscolaire</div>
        <div style={{gridRowStart:38, gridRowEnd:48}}>Animatrice Périscolaire</div>
        <div style={{gridRowStart:56, gridRowEnd:59}}>Garde d'enfants</div>
        <div style={{gridRowStart:60, gridRowEnd:72}}>AESH</div>
        <div style={{gridRowStart:75, gridRowEnd:83}}>STAGE : Animatrice Périscolaire</div>
        
      </section>
    </section>
  )
}


export default ViewTimeline;