import React from "react";
import "./Items.css";

function Items() {
  return (
    <div className='items'>
      <div className='item'>
        {" "}
        <div className='item-img'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbeo-4_Qerhz-bOeFyviSUxLtcNv1ZlWEKg&usqp=CAU'
            alt=''
          />
        </div>{" "}
      </div>

      <div className='item'>
        {" "}
        <div className='item-img'>
          <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Yr4SV8DB9fDKN9yNJHbQmZZcyqChY05tWg&usqp=CAU'
            alt=''
          />
        </div>{" "}
      </div>
    </div>
  );
}

export default Items;
