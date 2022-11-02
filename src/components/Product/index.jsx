import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOne, addToCart, removeOne } from "../../redux/cart";

import classes from "./Product.module.scss";

const Product = ({ data }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const { cart } = useSelector((state) => state);
  const items = Object.values(cart);
  const count = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleMinus = () => dispatch(removeOne(data));
  const handlePlus = () => dispatch(addOne(data));
  const handleClick = () => {
    dispatch(addToCart(data));
    setOpen((state) => !state);
  };

  return (
    <div className={classes["product"]}>
      <img
        className={classes["product__img"]}
        src={data.image}
        alt={data.name}
      />
      <a href="#!" className={classes["product__name"]}>
        {data.name}
      </a>
      <p className={classes["product__text"]}>{data.text}</p>
      <div className={classes["product__item"]}>
        <p className={classes["product__price"]}>{data.price} сум</p>
        {!open ? (
          <button onClick={handleClick} className={classes["product__button"]}>
            Хочу
          </button>
        ) : (
          <div className={classes["product__calculator"]}>
            <button className={classes["product__minus"]} onClick={handleMinus}>
              -
            </button>
            <p className={classes["product__counter"]}>{count}</p>
            <button className={classes["product__plus"]} onClick={handlePlus}>
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
