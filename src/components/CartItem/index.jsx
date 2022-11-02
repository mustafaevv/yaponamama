import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import classes from "./CartItem.module.scss";

const data = {
  id: 8,
  name: "Фила сарада",
  image: "https://cdn.yaponamama.uz/products/thumbs/1_1596495569.jpg",
  price: 65000,
  text: "Рукола, сочная говядина терияки с грушей и нежнейшим творожным сыром филадельфия. Ингредиенты: Говядина терияки Рукола",
  information: [
    "Говядина терияки",
    "Рукола",
    "Помидоры черри",
    "Консервированная груша",
    "Сыр Филадельфия",
    "Бальзамический крем",
    "Бальзамический уксус",
    "Лимонный фреш",
    "Оливковое масло",
    "Специи",
  ],
  category: "salad",
};

const CartItem = () => {
  return (
    <div className={classes["cart"]}>
      <img
        className={classes["cart__image"]}
        src={data.image}
        alt={data.name}
      />
      <div className={classes["cart__content"]}>
        <h5 className={classes["cart__name"]}>{data.name}</h5>
        <p className={classes["cart__text"]}>{data.text}</p>
        <div className={classes["cart__info"]}>
          <p className={classes["cart__price"]}>{data.price} сум</p>
          <div className={classes["cart__controller"]}>
            <button className={classes["cart__minus"]}>
              <AiOutlineMinus />
            </button>
            <p className={classes["cart__count"]}>100</p>
            <button className={classes["cart__plus"]}>
              <AiOutlinePlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
