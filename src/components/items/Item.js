import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { quantityActions } from "../redux";

function Item({ item }) {
  const { index, itemImg, itemTitle, price, id, data } = item;
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quantity);

  const increase = () => {
    dispatch(quantityActions.increase());
  };
  const decrease = () => {
    dispatch(quantityActions.decrease());
  };

  return (
    <div className='item' key={index}>
      {" "}
      <div className='item-img'>
        <img src={itemImg} alt='' />
      </div>{" "}
      <div className='right-cont'>
        <p className='item-title'>{itemTitle}</p>
        <p className='item-price'>${price}</p>
        <div className='quantity-cont'>
          <button className='action-btn' onClick={decrease}>
            -
          </button>
          <p className='quantity-num'>{quantity}</p>
          <button className='action-btn' onClick={() => increase(index)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item;
