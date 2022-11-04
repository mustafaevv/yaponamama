import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { addToCart, removeFromCart } from "../../redux/cart";

import classes from "./Product.module.scss"; 

const Product = ({ data, select }) => {
  const dispatch = useDispatch();

  const handleSelect = () => dispatch(!select ? addToCart(data) : removeFromCart(data.id));

  return (
    <div className={classes["product"]}>
      <Link to={`/information/${data.id}`}>
        <img
          className={classes["product__img"]}
          src={data.image}
          alt={data.name}
        />
      </Link>
      <Link to={`/information/${data.id}`} className={classes["product__name"]}>
        {data.name}
      </Link>
      <p className={classes["product__text"]}>{data.text}</p>
      <div className={classes["product__item"]}>
        <p className={classes["product__price"]}>{data.price} сум</p>
        <button
          onClick={handleSelect}
          className={classNames(
            select && classes["product__button_select"],
            classes["product__button"]
          )}
        >
          {select ? "Взял" : "Хочу"}
        </button>
      </div>
    </div>
  );
};

export default Product;
