import React from "react";
import ContactInfo from "../ContactInfo/ContactInfo";
import Shipping from "../ShippingAdress/Shipping";
import "./Form.css";

function Form() {
  return (
    <form action=''>
      <div className='form-title'>
        <h1>Checkout</h1>
      </div>
      <ContactInfo />
      <Shipping />
      <div className='btn-cont'>
        <button className='btn'>countinue</button>
      </div>
    </form>
  );
}

export default Form;
