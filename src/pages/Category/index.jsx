import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Product from "../../components/Product";
import Menu from "../../components/Menu";
import Container from "../../layout/Container";
import Banner from "../../components/Banner";
import navLinkItems from "../../components/NavLink/navLinkItem";

const Cards = styled.div`
  margin: 100px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  color: #000;
  font-size: 45px;
  position: relative;
  padding-left: 20px;
  &::after {
    content: "";
    height: 100%;
    width: 8px;
    position: absolute;
    top: 0;
    left: 0;
    background: #e74c4c;
  }
`;

const api = "https://63071da7c0d0f2b8012710af.mockapi.io/";

const Category = () => {
  const [data, setData] = useState(null);
  const { type } = useParams();
  const { pathname } = useLocation();
  const { cart: cartItem } = useSelector((state) => state);
  const { name } = navLinkItems.find((item) => item.link === pathname);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`${api}/yaponamama?category=${type}`);
      const cards = await data.json();
      setData(cards);
    };
    fetchData();
  }, [type]);

  return (
    <section>
      <Banner />
      <Menu />
      <Container>
        <Title>{name}</Title>
        <Cards>
          {data &&
            data.map((card) => (
              <Product data={card} key={card.id} select={card.id in cartItem} />
            ))}
        </Cards>
      </Container>
    </section>
  );
};

export default Category;
