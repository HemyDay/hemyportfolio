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
import puzzle from '../Assets/Icons/puzzle.svg'
import brain from '../Assets/Icons/brain.svg'
import paint from '../Assets/Icons/paint.svg'
import linkedin from '../Assets/Icons/linkedin.svg'
import github from '../Assets/Icons/github.svg'

const Resume = () => {
  return(
    <section>
      <h2>Développeuse Web & Mobile Full-Stack</h2>

      <div className='social_media_display'>
        <a href="https://www.linkedin.com/in/asiredev/"><img className='resume_icon social_media' src={linkedin} alt={"linkedin icon"}/></a>
        
        <a href="https://github.com/HemyDay"><img className='resume_icon social_media' src={github} alt={"github icon"}/></a>
      </div>

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
          <h3 className='resume_subtitle'>Technos & outils</h3>
        </div>
        <h4 className='resume_subsubtitle'>Langages et technos</h4>
        
        <div className='techno_list'>
          
          <p className='techno'>HTML</p>
          <p className='techno'>CSS</p>
          <p className='techno'>JavaScript</p>
          <p className='techno'>React</p>
          <p className='techno'>Node.js</p>
          <p className='techno'>React Native</p>
          <p className='techno'>Wordpress</p>
          <p className='techno'>SQL</p>
          <p className='techno'>MongoDB</p>
        </div>
          

        <h4 className='resume_subsubtitle'>Outils</h4>
        <div className='techno_list'>
          <p className='techno'>Docker</p>
          <p className='techno'>GitHub</p>
          <p className='techno'>GitLab</p>
          <p className='techno'>Jira</p>
          <p className='techno'>VSCode</p>
          <p className='techno'>Figma</p>
          <p className='techno'>Android Studio</p>
        </div>
          

        <h4 className='resume_subsubtitle'>Méthodes</h4>

        <div className='techno_list'>
          <p className='techno'>Agile</p>
          <p className='techno'>Scrum</p>
          <p className='techno'>Merise</p>
          <p className='techno'>UML</p>
          <p className='techno'>Kanban</p>
          <p className='techno'>Tests unitaires</p>
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

      <Container>
        <div className='resume_title_and_icon'>
          <img className='resume_icon' src={paint} alt={"paint icon"}/>
          <h3 className='resume_subtitle'>Centres d'intéret</h3>
        </div>

        <p className='resume_detail'>Bricolage, Woodworking, Arts créatifs</p>
        <p className='resume_detail'>Jeux de mots et de logique (sudoku, mots fléchés)</p>
        <p className='resume_detail'>Jeux de rôle, D&D</p>
        <p className='resume_detail'>Jeux vidéos (gestion et simulation)</p>
        <p className='resume_detail'>Culture internet</p>
        <p className='resume_detail'>Psychologie, sociologie</p>
        <p className='resume_detail'>Linguistique</p>
        <p className='resume_detail'>Education</p>
      </Container>

      
    </section>
  )
}

export default Resume;