import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import CartItem from "../../components/CartItem";
import Title from "../../components/Title";
import Container from "../../layout/Container";

import classes from "./Cart.module.scss";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const items = Object.values(cart);
  const cartEmpty = items.length === 0;
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section>
      <Container>
        {cartEmpty ? (
          <Title>Ваша корзина пуста.</Title>
        ) : (
          <Title>Корзина</Title>
        )}
        {!cartEmpty &&
          items.map((card) => <CartItem {...card} key={card.id} />)}
        {!cartEmpty && (
          <div className={classes["cart__item"]}>
            <p className={classes["cart__text"]}>Итоговая цена:</p>
            <p className={classes["cart__totalPrice"]}>{total} сум</p>
          </div>
        )}
        {cartEmpty ? (
          <Link className={classes['cart__back']} to={"/"}>
            <FiArrowLeft /> Hазад
          </Link>
        ) : (
          ""
        )}
      </Container>
    </section>
  );
};

export default Cart;
