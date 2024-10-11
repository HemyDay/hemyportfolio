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
import puzzle from '../Assets/Icons/puzzle.svg';
import brain from '../Assets/Icons/brain.svg'

const Resume = () => {
  return(
    <section>
      <h2>Développeuse Web & Mobile Full-Stack</h2>
      <Container>
        <div className='resume_title_and_icon'>
          <img className='resume_icon' src={puzzle} alt={"puzzle icon"}/>
          <h3 className='resume_subtitle'>Projet professionnel</h3>
        </div>

        <p className='resume_detail'>
          Après plusieurs années à travailler et étudier dans les domaines de <b>l'éducation, la linguistique et l'enseignement</b>, je me suis rendue compte que ce qui me plaisait dans ces métiers c'était de <b>créer des outils pour faciliter la communication et la transmission de savoirs</b>.
        </p>
        <p className='resume_detail'>
          Je passais des heures à mettre en page mes cours, créer des exercices interactifs, imaginer des outils permettant de faciliter ma vie au travail.  C'est à ce moment que <b>j'ai découvert ma passion pour la programmation et la conception d'applications</b>. En 2023, j'ai intégré une formation et obtenu, un an plus tard, le BAC +2 <b>Titre Professionnel Développeur Web et Web Mobile</b>. 
        </p>
        <p className='resume_detail'>
          Aujourd'hui, <b>je souhaite intégrer en tant que développeuse</b> une entreprise qui contribue à <b>faciliter la vie et le travail des gens</b>, en proposant des solutions numériques répondant à leurs besoins spécifiques.
        </p>
        
      </Container>
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
          <img className='resume_icon' src={brain} alt={"brain icon"}/>
          <h3 className='resume_subtitle'>Soft Skills</h3>
        </div>

        <p className='resume_detail'>Résolution de problèmes</p>
        <p className='resume_detail'>Collaboration</p>
        <p className='resume_detail'>Communication</p>
        <p className='resume_detail'>Intelligence émotionnelle</p>
        <p className='resume_detail'>Curiosité</p>
        <p className='resume_detail'>Soif d'apprentissage</p>
        <p className='resume_detail'>Attention aux détails</p>
        <p className='resume_detail'>Esprit d'équipe</p>
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