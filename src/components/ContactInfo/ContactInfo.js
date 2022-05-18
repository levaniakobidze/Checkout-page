import React from "react";
import "./ContactInfo.css";
import MailIcon from "@mui/icons-material/Mail";

function ContactInfo() {
  return (
    <section className='contact-info'>
      <p className='contact-info-title'>Contact information</p>
      <label htmlFor='email'>E-mail</label>
      <div className='email-input-cont'>
        <MailIcon className='email-icon' />

        <input
          type='text'
          id='email'
          name='email'
          placeholder='Enter your email'
        />
      </div>
    </section>
  );
}

export default ContactInfo;
