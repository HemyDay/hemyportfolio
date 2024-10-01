// LIBRARIES
import React from 'react';
// STYLE
import './ViewTimeline.css';
// COMPONENTS
import TimelineElement from '../Components/TimelineElement';

const ViewTimeline = () => {
  return(
    <section className='View_Timeline'> 
        <div style={{gridRowStart:1, gridRowEnd:1, gridColumn:1}}>DIPLOME DEV</div>
        <div style={{gridRowStart:2, gridRowEnd:2, gridColumn:1}}>Beweb</div>
        <div style={{gridRowStart:4, gridRowEnd:4, gridColumn:1}}>FLE</div>
        <div style={{gridRowStart:5, gridRowEnd:5, gridColumn:1}}>FDE</div>
        <div style={{gridRowStart:6, gridRowEnd:6, gridColumn:1}}>LICENCE 3 SDL CMM</div>
        <div style={{gridRowStart:7, gridRowEnd:7, gridColumn:1}}>SDL CMM</div>
        <div style={{gridRowStart:9, gridRowEnd:9, gridColumn:1}}>CQP</div>
        <div style={{gridRowStart:10, gridRowEnd:10, gridColumn:1}}>SDL CMM</div>
        <div style={{gridRowStart:11, gridRowEnd:11, gridColumn:1}}>Baccalauréat Littéraire</div>
        <div style={{gridRowStart:2, gridRowEnd:2, gridColumn:3}}>STAGE : Développeuse Web</div>
        <div style={{gridRowStart:3, gridRowEnd:3, gridColumn:3}}>Assistante d'Education</div>
        <div style={{gridRowStart:4, gridRowEnd:4, gridColumn:3}}>Animatrice Périscolaire</div>
        <div style={{gridRowStart:5, gridRowEnd:5, gridColumn:3}}>Stage professeur des écoles</div>
        <div style={{gridRowStart:6, gridRowEnd:6, gridColumn:3}}>Animatrice Périscolaire</div>
        <div style={{gridRowStart:7, gridRowEnd:7, gridColumn:3}}>Garde d'enfants</div>
        <div style={{gridRowStart:8, gridRowEnd:8, gridColumn:3}}>AESH</div>
        <div style={{gridRowStart:9, gridRowEnd:9, gridColumn:3}}>STAGE : Animatrice Périscolaire</div>
    </section>
  )
}


export default ViewTimeline;