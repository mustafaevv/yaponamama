import React from "react";

import classes from "./Product.module.scss";

const Product = ({ data }) => {
  return (
    <div className={classes["product"]}>
      <img
        className={classes["product__img"]}
        src={data.image}
        alt={data.name}
      />
      <a href="" className={classes["product__name"]}>{data.name}</a>
      <p className={classes["product__text"]}>{data.text}</p>
      <div className={classes["product__item"]}>
        <p className={classes["product__price"]}>{data.price} сум</p>
        <button className={classes["product__button"]}>Хочу</button>
      </div>
    </div>
  );
};

export default Product;
