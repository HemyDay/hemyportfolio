// LIBRARIES
import React from "react";
// STYLE
import "./QuickResume.css";
//COMPONENTS

//ASSETS
import githubLogo from '../Assets/Logo/github-logo.svg';
import cssLogo from '../Assets/Logo/css-logo.svg';
import makeLogo from '../Assets/Logo/make-logo.svg';
import reactLogo from '../Assets/Logo/react-logo.svg';
import mongodbLogo from '../Assets/Logo/mongodb-logo.svg';
import wordpressLogo from '../Assets/Logo/wordpress-logo.svg';
import typescriptLogo from '../Assets/Logo/typescript-logo.svg';


const QuickResume = () => {

  return(
    <section className="QuickResume">
      <h2>Amanda SIRE</h2>

      <h3>Parcours rapide</h3>
      <div className="parcoursItem">
        <p className="dateAndLevel">2024 | BAC+2</p>
        <p className="title">Titre Profesionnel Développeur Web et Web Mobile</p>
      </div>
      <div className="parcoursItem">
        <p className="dateAndLevel">2021 | BAC+3</p>
        <p className="title">Licence Sciences du Langage parcours Communication, Medias, Médiation Numérique</p>   
      </div>
      <div className="parcoursItem">
        <p className="dateAndLevel">2015 | BAC</p>
        <p className="title">Baccalauréat Littéraire</p>
      </div> 

      <h3>Projets</h3>

      <div className="projectItem">
        <p className="projectName">Portfolio</p>
        <p className="projectType">Projet personnel</p>
        <p className="projectDescription">Le site sur lequel vous vous trouvez actuellement !</p>
        
        <div className="projectTechnologies">

          <div className="technoItem"> 
            <img className="logo" src={reactLogo}/>
            <p>React</p>
          </div>

          <div className="technoItem"> 
            <img className="logo" src={typescriptLogo}/>
            <p>TypeScript</p>
          </div>

          <div className="technoItem"> 
            <img className="logo" src={cssLogo}/>
            <p>CSS</p>
          </div>

          <div className="technoItem"> 
            <img className="logo" src={githubLogo}/>
            <p>GitHub</p>
          </div>

        </div>
      </div>
      
      <div className="projectItem">
        <p className="projectName">SBRA</p>
        <p className="projectType">Projet personnel</p>
        <p className="projectDescription">Application mobile de création, gestion et tracking de routines.</p>
        
        <div className="projectTechnologies">

          <div className="technoItem"> 
            <img className="logo" src={reactLogo}/>
            <p>React Native</p>
          </div>
          
          <div className="technoItem"> 
            <img className="logo" src={mongodbLogo}/>
            <p>Realm</p>
          </div>

          <div className="technoItem"> 
            
            <p>Android Studio</p>
          </div>

          <div className="technoItem"> 
            <img className="logo" src={githubLogo}/>
            <p>GitHub</p>
          </div>

        </div>
      </div>
      
      <div className="projectItem">
        <p className="projectName">Sudokultimate</p>
        <p className="projectType">Projet personnel</p>
        <p className="projectDescription">Application web permettant de jouer au Killer Sudoku.</p>
        
        <div className="projectTechnologies">

          <div className="technoItem"> 
            <img className="logo" src={reactLogo}/>
            <p>React</p>
          </div>

          <div className="technoItem"> 
            <img className="logo" src={cssLogo}/>
            <p>CSS</p>
          </div>

          <div className="technoItem"> 
            <img className="logo" src={githubLogo}/>
            <p>GitHub</p>
          </div>

        </div>
      </div>
      
      <div className="projectItem">
        <p className="projectName">WeGonRide</p>
        <p className="projectType">Stage en entreprise</p>
        <p className="projectDescription">Site internet de publication d'articles et mise en relation de voyageurs.</p>
        
        <div className="projectTechnologies">

          <div className="technoItem"> 
            <img className="logo" src={wordpressLogo}/>
            <p>WordPress</p>
          </div>

          <div className="technoItem"> 
            
            <p>Elementor</p>
          </div>

          <div className="technoItem"> 
            <img className="logo" src={makeLogo}/>
            <p>Make</p>
          </div>

          <div className="technoItem"> 
            
            <p>Notion</p>
          </div>

          <div className="technoItem"> 
            
            <p>TypeForm</p>
          </div>

          <div className="technoItem"> 
            
            <p>Figma</p>
          </div>

        </div>
      </div>
      
      <div className="projectItem">
        <p className="projectName">CMS BeWeb</p>
        <p className="projectType">Exercice</p>
        <p className="projectDescription">Système de gestion de contenu et son interface administrateur.</p>
        
        <div className="projectTechnologies">

          <div className="technoItem"> 
            <img className="logo" src={reactLogo}/>
            <p>React</p>
          </div>

          <div className="technoItem"> 
            
            <p>GitLab</p>
          </div>

          <div className="technoItem"> 
            
            <p>Figma</p>
          </div>

        </div>
      </div>
      
      <div className="projectItem">
        <p className="projectName">KokotBank</p>
        <p className="projectType">Exercice</p>
        <p className="projectDescription">Site de banque factice avec tableau de bord client et administrateur.</p>
        
        <div className="projectTechnologies">

          <div className="technoItem"> 
            
            <p>JavaScript</p>
          </div>

          <div className="technoItem"> 
            <img className="logo" src={mongodbLogo}/>
            <p>MongoDB</p>
          </div>

          <div className="technoItem"> 
            <img className="logo" src={cssLogo}/>
            <p>CSS</p>
          </div>

          <div className="technoItem"> 
            
            <p>Vue.js</p>
          </div>

          <div className="technoItem"> 
            
            <p>Express.js</p>
          </div>

          <div className="technoItem"> 
            
            <p>Docker</p>
          </div>

          <div className="technoItem"> 
            
            <p>Figma</p>
          </div>

        </div>
      </div>

      <h3>Langues</h3>
        <p><span className="language">Français</span> <span className="languageLevel">Natif</span></p>
        <p><span className="language">Anglais</span> <span className="languageLevel">Courrant C1</span></p>
      
      <h3>Localisation</h3>
        <p>Montpellier et ses alentours, accessible en transports en commun</p>
    
    </section>
  )
}


export default QuickResume;
