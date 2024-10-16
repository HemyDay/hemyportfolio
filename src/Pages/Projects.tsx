// LIBRARIES
import React from 'react';
// STYLE
import './Projects.css';
// COMPONENTS
import Container from '../Components/Container';
// ASSETS
import smartphone from '../Assets/Icons/smartphone.svg'
import tablet from '../Assets/Icons/tablet.svg';
import laptop from '../Assets/Icons/laptop.svg';


const Projects = () => {

  return(
    <section>
      <h2>Projets</h2>

      <Container>
        <div className='project_header'>

          <div>
            <h3 className='resume_subtitle'>Portfolio</h3>
            <p className='project_type'>Projet perso</p>
          </div>
          
          <div className='project-plateformes'>
            <img className='project_icon' src={smartphone} alt={"smartphone icon"}/>
            <img className='project_icon' src={tablet} alt={"tablet icon"}/>
            <img className='project_icon' src={laptop} alt={"laptop icon"}/>
          </div>

        </div>
        
        <h4>Description</h4>
        <p className='project_description'>
          Le site sur lequel vous vous trouvez actuellement ! Présentant mon CV, mon parcours et mes projets. 
        </p>
        <h4>Challenges</h4>
          <p className='project_challenge'> Créer une timeline lisible et exhaustive.</p>
          <p className='project_challenge'> Créer un menu hamburger sans librarie.</p>
        <h4>Langages & Outils</h4>
          <p className='project_tools'>HTML, CSS, JavaScript, JSX</p>
          <p className='project_tools'>React</p>
      </Container>

      <Container>
        <div className='project_header'>
          
          <div>
            <h3 className='resume_subtitle'>SBRA</h3>
            <p className='project_type'>Projet perso</p>
          </div>
          
          <div className='project-plateformes'>
            <img className='project_icon' src={smartphone} alt={"smartphone icon"}/>
          </div>

        </div>
        <h4>Description</h4>
        <p className='project_description'>
          Application mobile de création, gestion et tracking de routines. 
        </p>
        <h4>Challenges</h4>
          <p className='project_challenge'> Structurer les données et créer les types de données avec Realm. </p>
          <p className='project_challenge'> Choisir entre icones en svg, png ou emoji pour illustrer chaque routine. </p>
        <h4>Langages & Outils</h4>
          <p className='project_tools'>JavaScript, JSX</p>
          <p className='project_tools'>React Native</p>
          <p className='project_tools'>MongoDB Realm</p>
          <p className='project_tools'>Android Studio</p>
      </Container>

      <Container>
      <div className='project_header'>
          
          <div>
            <h3 className='resume_subtitle'>Sudokultimate</h3>
            <p className='project_type'>Projet perso</p>
          </div>
          
          <div className='project-plateformes'>
            <img className='project_icon' src={tablet} alt={"tablet icon"}/>
            <img className='project_icon' src={laptop} alt={"laptop icon"}/>
          </div>

        </div>
        <h4>Description</h4>
        <p className='project_description'>
          Plateforme permettant de créer des grilles de killer sudoku et d'y jouer.
        </p>
        <h4>Challenges</h4>
          <p className='project_challenge'> Créer les JSON pour la grille et les combinaisons possibles. </p>
          <p className='project_challenge'> Mettre en place le commandes clavier en veillant à ce que ce soit compatible avec tout type de claviers. </p>
        <h4>Langages & Outils</h4>
          <p className='project_tools'>HTML, CSS, JavaScript, JSX</p>
          <p className='project_tools'>React</p>
      </Container>

      <Container>
        <div className='project_header'>
          
          <div>
            <h3 className='resume_subtitle'>WeGonRide</h3>
            <p className='project_type'>Projet de stage</p>
          </div>
          
          <div className='project-plateformes'>
            <img className='project_icon' src={smartphone} alt={"smartphone icon"}/>
            <img className='project_icon' src={tablet} alt={"tablet icon"}/>
            <img className='project_icon' src={laptop} alt={"laptop icon"}/>
          </div>

        </div>
        <h4>Description</h4>
        <p className='project_description'>
          Site web regroupant des articles sur le voyage, et permettant l'inscription à un système de match-making pour les personnes voyageant au même endroit à la même date.
        </p>
        <h4>Challenges</h4>
        <p className='project_challenge'> Créer le workflow automatisé de match-making avec Make.</p>
        <p className='project_challenge'> Créer et gérer les taxonomies custom pour notre site.</p>
        <h4>Langages & Outils</h4>
          <p className='project_tools'>WordPress</p>
          <p className='project_tools'>Elementor, WPGridBuilder, ACF</p>
          <p className='project_tools'>Figma</p>
          <p className='project_tools'>Notion</p>
          <p className='project_tools'>Make</p>
      </Container>

      <Container>
      <div className='project_header'>
          
          <div>
            <h3 className='resume_subtitle'>CMS BeWeb</h3>
            <p className='project_type'>Exercice de formation</p>
          </div>
          
          <div className='project-plateformes'>
            <img className='project_icon' src={tablet} alt={"tablet icon"}/>
            <img className='project_icon' src={laptop} alt={"laptop icon"}/>
          </div>

        </div>
        <h4>Description</h4>
        <p className='project_description'>
          Création d'une application de création et de gestion de CMS.
        </p>
        <h4>Challenges</h4>
          <p className='project_challenge'> Implémenter le mode sombre.</p>
          <p className='project_challenge'> Créer des composants React et les documenter.</p>
        <h4>Langages & Outils</h4>
          <p className='project_tools'>HTML, CSS, JavaScript, JSX</p>
          <p className='project_tools'>React</p>
          <p className='project_tools'>GitLab, Jira</p>
          <p className='project_tools'>Figma</p>
      </Container>

      <Container>
      <div className='project_header'>
          
          <div>
            <h3 className='resume_subtitle'>MineSweeper</h3>
            <p className='project_type'>Projet perso</p>
          </div>
          
          <div className='project-plateformes'>
            <img className='project_icon' src={tablet} alt={"tablet icon"}/>
            <img className='project_icon' src={laptop} alt={"laptop icon"}/>
          </div>

        </div>
        <h4>Description</h4>
        <p className='project_description'>
          Reproduction du jeu démineur sur navigateur.
        </p>
        <h4>Challenges</h4>
          <p className='project_challenge'>Utiliser uniquement JavaScript vanilla.</p>
        <h4>Langages & Outils</h4>
          <p className='project_tools'>HTML, CSS, JavaScript</p>
      </Container>

      <Container>
      <div className='project_header'>
          
          <div>
            <h3 className='resume_subtitle'>KoKotBank</h3>
            <p className='project_type'>Exercice de formation</p>
          </div>
          
          <div className='project-plateformes'>
            <img className='project_icon' src={laptop} alt={"laptop icon"}/>
          </div>

        </div>
        <h4>Description</h4>
        <p className='project_description'>
          Plateforme de gestion de comptes banquaires factices, en tant qu'administrateur et client.
        </p>
        <h4>Challenges</h4>
        <p className='project_challenge'>Créer une simulation de transactions pour chaque compte tous les jours depuis la dernière connexion.</p>
        <p className='project_challenge'>Créer la base de données.</p>
        <h4>Langages & Outils</h4>
          <p className='project_tools'>HTML, CSS, JavaScript</p>
          <p className='project_tools'>Express.js</p>
          <p className='project_tools'>MongoDB</p>
          <p className='project_tools'>Docker</p>
      </Container>


    </section>
  )
}

export default Projects;