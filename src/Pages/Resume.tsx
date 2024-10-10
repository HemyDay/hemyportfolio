// LIBRARIES
import React from 'react';
// STYLE
import './Resume.css';
// COMPONENTS
import Container from '../Components/Container';
// ASSETS
import degree from '../Assets/Icons/certification.svg'
import work from '../Assets/Icons/suitcase.svg'
import programming from '../Assets/Icons/programming.svg'
import language from '../Assets/Icons/speak.svg'
import map from '../Assets/Icons/map.svg'

const Resume = () => {
  return(
    <section>
      <h2>Développeuse Web & Mobile Full-Stack</h2>
      <Container>
        <div className='resume_title_and_icon'>
          <img className='resume_icon' src={degree} alt={"degree icon"}/>
          <h3 className='resume_subtitle'>Diplomes</h3>
        </div>
    
        <p className='resume_detail'>BAC+2 | TP Développeur Web et Web Mobile</p>
        <p className='resume_detail'>BAC+3 | Licence Sciences du Langage pcs. CMM</p>
        <p className='resume_detail'>BAC | Baccalauréat Littéraire</p>

      </Container>
      
      <Container>
        <div className='resume_title_and_icon'>
          <img className='resume_icon' src={work} alt={"degree icon"}/>
          <h3 className='resume_subtitle'>Expériences Professionnelles</h3>
        </div>

        <p className='resume_detail'>Développeuse Web</p>
        <p className='resume_detail'>Assistante d'Education</p>
        <p className='resume_detail'>Professeur des Ecoles</p>
        <p className='resume_detail'>Animatrice Périscolaire</p>
        <p className='resume_detail'>Accompagnant des élèves en situation de handicap</p>

      </Container>

      <Container>
        <div className='resume_title_and_icon'>
          <img className='resume_icon' src={programming} alt={"programming icon"}/>
          <h3 className='resume_subtitle'>Technos</h3>
        </div>
      </Container>

      <Container>
        <div className='resume_title_and_icon'>
          <img className='resume_icon' src={language} alt={"langauge icon"}/>
          <h3 className='resume_subtitle'>Langues</h3>
        </div>

        <p className='resume_detail'>Français (natif)</p>
        <p className='resume_detail'>Anglais (courant)</p>
        <p className='resume_detail'>Espagnol (débutant)</p>
      </Container>

      <Container>
        <div className='resume_title_and_icon'>
          <img className='resume_icon' src={map} alt={"map icon"}/>
          <h3 className='resume_subtitle'>Localisation</h3>
        </div>

        <p className='resume_detail'>Montpellier et alentours, accessibles en transports en commun.</p>
        <p className='resume_detail'>Remote</p>

      </Container>

    </section>
  )
}

export default Resume;