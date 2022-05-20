import React from "react";
import "./Items.css";
import { data } from "./ItensData";
import { useSelector, useDispatch } from "react-redux";
import { quantityActions } from "../redux/index";

function Items() {
  const dispatch = useDispatch();

  const quantity = useSelector((state) => state.quantity);

  const increase = () => {
    dispatch(quantityActions.increase());
  };
  const decrease = () => {
    dispatch(quantityActions.decrease());
  };

  console.log(quantityActions);

  console.log(quantity);

  return (
    <div className='items'>
      {data.map((item, index) => {
        return (
          <div className='item' key={index}>
            {" "}
            <div className='item-img'>
              <img src={item.itemImg} alt='' />
            </div>{" "}
            <div className='right-cont'>
              <p className='item-title'>{item.itemTitle}</p>
              <p className='item-price'>${item.price}</p>
              <div className='quantity-cont'>
                <button className='action-btn' onClick={decrease}>
                  -
                </button>
                <p className='quantity-num'>{quantity}</p>
                <button className='action-btn' onClick={() => increase()}>
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
