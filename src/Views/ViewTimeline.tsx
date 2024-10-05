// LIBRARIES
import React from 'react';
// STYLE
import './ViewTimeline.css';
// COMPONENTS
import TimelineElement from '../Components/TimelineElement';

const ViewTimeline = () => {
  return(
    <section className='View_Timeline'> 
     
        <TimelineElement 
          start={1} end={2} type={'degree'} 
          title={'DIPLOME | TP Développeur Web et Web Mobile'}
          city={"Montpellier"}
          location={'Fondespierre | BeWeb'}
          date={"Juil 2024"}
        />
        <TimelineElement 
          start={2} end={2} type={'study'} 
          title={'Titre Professionnel | Développeur Web et Web Mobile'}
          city={"Montpellier"}
          location={'Fondespierre | BeWeb'}
          date={"Sept 2023 Juil 2024"}
        />
        <TimelineElement 
          start={2} end={2} type={'work'} 
          title={'Stage | Développeur Web'}
          city={"Remote"}
          location={'WeGonRide'}
          date={"Juin 2024 Mars 2024"}
        />
        <TimelineElement 
          start={3} end={3} type={'work'} 
          title={"CDD | Assistante d'Education"}
          city={"Le Crès"}
          location={'Collège de la Voie Domitienne'}
          date={"Août 2024 Jan 2024"}
        />
        <TimelineElement 
          start={4} end={4} type={'study'} 
          title={"M1 | Didactique du Français Langue Etrangère"}
          city={"Montpellier"}
          location={'Université Paul Valéry Montpellier 3'}
          date={"Dec 2022 Sept 2022"}
        />
        <TimelineElement 
          start={4} end={4} type={'work'} 
          title={"CDD | Animation Périscolaire"}
          city={"Montpellier"}
          location={'Mairie de Montpellier'}
          date={"Dec 2022 Sept 2022"}
        />
        <TimelineElement 
          start={5} end={5} type={'study'} 
          title={"M1 | MEEF Professeur des Ecoles"}
          city={"Montpellier"}
          location={"Faculté d'Education"}
          date={"Juin 2022 Sept 2021"}
        />
        <TimelineElement 
          start={5} end={5} type={'work'} 
          title={"Stage | Professeur des Ecoles"}
          city={"Saint Jean de Fos & Assas"}
          location={"Education Nationale"}
          date={"Avr 2022 Nov 2021"}
        />
        <TimelineElement 
          start={6} end={6} type={'degree'} 
          title={"DIPLOME | Licence Sciences du Langage pcs CMM"}
          city={"Montpellier"}
          location={'Université Paul Valéry Montpellier 3'}
          date={"Juin 2021"}
        />
        <TimelineElement 
          start={6} end={6} type={'work'} 
          title={"CDD | Animation Périscolaire"}
          city={"Montpellier"}
          location={'Mairie de Montpellier'}
          date={"Juin 2021 Sept 2020"}
        />
        <TimelineElement 
          start={7} end={7} type={'study'} 
          title={"Licence | Sciences du Langage pcs CMM"}
          city={"Montpellier"}
          location={'Université Paul Valéry Montpellier 3'}
          date={"Juin 2021 Sept 2019"}
        />
        <TimelineElement 
          start={7} end={7} type={'work'} 
          title={"CDD | Garde d'enfants et aide aux devoirs"}
          city={"Montpellier"}
          location={'Particulier'}
          date={"Dec 2019 Sept 2019"}
        />
        <TimelineElement 
          start={8} end={8} type={'work'} 
          title={"CDD | AESH"}
          city={"Montpellier"}
          location={'Education Nationale'}
          date={"Juin 2019 Sept 2018"}
        />
        <TimelineElement 
          start={9} end={9} type={'study'} 
          title={"CQP | Animation Périscolaire"}
          city={"Montpellier"}
          location={'La Gerbe'}
          date={"Juin 2018 Sept 2017"}
        />
        <TimelineElement 
          start={9} end={9} type={'work'} 
          title={"Stage | Animation Périscolaire"}
          city={"Montpellier"}
          location={'La Gerbe'}
          date={"Juin 2018 Sept 2017"}
        />
        <TimelineElement 
          start={11} end={11} type={'degree'} 
          title={"DIPLOME | Baccalauréat Littéraire"}
          city={"Nîmes"}
          location={'Lycée Albert Camus'}
          date={"Juil 2015"}
        />
    </section>
  )
}


export default ViewTimeline;