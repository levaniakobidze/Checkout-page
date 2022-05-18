import React from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import "./Form.css";

function Form() {
  return (
    <form action=''>
      <div className='form-title'>
        <h1>Checkout</h1>
      </div>
      <ContactInfo />
    </form>
  );
}

export default Form;
