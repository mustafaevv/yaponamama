import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";

import { addOne, removeFromCart, removeOne } from "../../redux/cart";

import classes from "./CartItem.module.scss";

const CartItem = ({ id, image, name, price, quantity }) => {
  const dispatch = useDispatch();
  const handlePlus = () => dispatch(addOne(id));
  const handleMinus = () => dispatch(removeOne(id));
  const handleClear = () => dispatch(removeFromCart(id));
  return (
    <div className={classes["cart"]}>
      <img className={classes["cart__image"]} src={image} alt={name} />
      <h5 className={classes["cart__name"]}>{name}</h5>
      <div className={classes["cart__controller"]}>
        <button onClick={handleMinus} className={classes["cart__minus"]}>
          <AiOutlineMinus />
        </button>
        <p className={classes["cart__count"]}>{quantity}</p>
        <button onClick={handlePlus} className={classes["cart__plus"]}>
          <AiOutlinePlus />
        </button>
      </div>
      <p className={classes["cart__price"]}>{price} сум</p>
      <button className={classes["cart__trash"]} onClick={handleClear}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
};

export default CartItem;
