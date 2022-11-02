import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";

import Banner from "../../components/Banner";
import CartItem from "../../components/CartItem";
import NavLink from "../../components/NavLink";
import Product from "../../components/Product";
import Container from "../../layout/Container";

const Section = styled.section`
  position: relative;
`;

const Cards = styled.div`
  margin: 100px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const CartBar = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  z-index: 1000;
  right: ${({ open }) => (open ? "100%" : "0")};
  background: silver;
  padding-bottom: 20px;
  border-radius: 8px 0 0 8px;
  height: 100%;
  & ::-webkit-scrollbar {
    width: 10px;
  }
`;

const CartTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid #000;

  & h4 {
    font-size: 24px;
    color: #000;
    font-weight: 500;
  }

  & button {
    border: none;
    background: none;
    font-size: 24px;
    cursor: pointer;
  }
`;
const CartMain = styled.div`
  padding: 20px;
`;
const CartBottom = styled.div`
  background: #de3e3e;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 25px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 30px;

  & p {
    font-size: 18px;
    font-weight: 500;
    color: #fff;
  }
`;

const Home = () => {
  const [open, setOpen] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/products");
      const cards = await data.json();
      setData(cards);
    };
    fetchData();
  }, []);
  
  const Open = () => {
    setOpen((state) => !state);
  };

  return (
    <section>
      <Banner />
      <NavLink />
      <Container>
        <Cards>
          {data && data.map((card) => <Product key={card.id} data={card} />)}
        </Cards>
      </Container>
      <CartBar open={open}>
        <CartTop>
          <h4>Корзина</h4>
          <button onClick={Open}>
            <AiOutlineClose />
          </button>
        </CartTop>
        <CartMain>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </CartMain>
        <CartBottom>
          <p>Оформить заказ</p>
          <p>100 сум</p>
        </CartBottom>
      </CartBar>
    </section>
  );
};

export default Home;
