import React, { useState } from "react";
import { useDispatch } from "react-redux";
import classNames from "classnames";

import { addToCart, removeFromCart } from "../../redux/cart";

import classes from "./InformationItem.module.scss";

const InformationItem = ({ data }) => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState(false);
  const handleClick = () => { 
    dispatch(!select ? addToCart(data) : removeFromCart(data.id));
    setSelect((state) => !state);
  };
  return (
    <div className={classes["cart"]}>
      <div className={classes["cart__left"]}>
        <img className={classes["cart__image"]} src={data.image} alt={data.name} />
      </div>
      <div className={classes["cart__right"]}>
        <h2 className={classes["cart__name"]}>{data.name}</h2>
        <p className={classes["cart__text"]}>{data.text}</p>
        <div className={classes["cart__prototypes"]}>
          {data.information?.map((item, i) => (
            <p key={i} className={classes["cart__information"]}>
              {item}
            </p>
          ))}
        </div>
        <div className={classes["cart__item"]}>
          <p className={classes["cart__price"]}>{data.price} сум</p>
          <button
            className={classNames(
              classes["cart__button"],
              select ? classes["cart__button_active"] : ""
            )}
            onClick={handleClick}
          >
            {select ? "Взял" : "Хочу"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformationItem;
