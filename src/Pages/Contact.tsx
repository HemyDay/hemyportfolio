// LIBRARIES
import React from 'react';
// STYLE
import './Contact.css';
// COMPONENTS
import Container from '../Components/Container';
// ASSETS
import phone from '../Assets/Icons/phone.svg'
import email from '../Assets/Icons/email.svg'

const Contact = () => {

  return(
    <section>
      <h2>Contact</h2>
      
      <Container> 
        <div className='contact_title_and_icon'>
          <img className='contact_icon' src={email} alt={"email icon"}/>
          <h3 className='contact_subtitle'>E-mail</h3>
        </div>
        
        <p className='contact_main_paragraph'><a href="mailto:sire.amanda@gmail.com">sire.amanda@gmail.com</a></p>
      </Container>

      <Container> 
        <div className='contact_title_and_icon'>
          <img className='contact_icon' src={phone} alt={"phone icon"}/>
          <h3 className='contact_subtitle'>Téléphone</h3>
        </div>

        <p className='contact_main_paragraph'>06.67.78.67.04</p>
        <p className='contact_main_paragraph contact_warning'>
          Le réseau téléphonique étant capricieux à mon domicile, merci de priviligier le contact par email ou par WhatsApp.
        </p>
      </Container>



    </section>
  )
}

export default Contact;