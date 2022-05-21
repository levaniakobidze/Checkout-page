import React, { useState, useEffect } from "react";
import "./Items.css";
import { data } from "./ItensData";
import Item from "./Item";

function Items() {
  return (
    <div className='items'>
      {data.map((item) => {
        return <Item key={item.id} id={item.id} item={item} data={data} />;
      })}
    </div>
  );
}

export default Items;
