// LIBRARIES
import React from 'react';
// STYLE
import './HeaderButton.css';
// ASSETS
import about from '../Assets/Icons/about.svg';
import contact from '../Assets/Icons/contact.svg';
import home from '../Assets/Icons/home.svg';
import projects from '../Assets/Icons/projects.svg';
import resume from '../Assets/Icons/resume.svg';
import timeline from '../Assets/Icons/timeline.svg';

const HeaderButton = (props:any) => {

  let icon = home;

  switch(props.value) {
    case "Home" : icon = home; break;
    case "Resume" : icon = resume; break;
    case "Timeline" : icon = timeline; break;
    case "Projects" : icon = projects; break;
    case "About" : icon = about; break;
    case "Contact" : icon = contact; break;
    default: icon = home; break;
  } 



  return(
    <a className='HeaderButton'>
      <img src={icon} alt={props.value} />
      <span>{props.value}</span>
    </a>
  )
}


export default HeaderButton;