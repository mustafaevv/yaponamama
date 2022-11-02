import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Product from "../../components/Product";
import Menu from "../../components/Menu";
import Container from "../../layout/Container";
import Banner from "../../components/Banner";

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
  &::after{
    content: "";
    height: 100%;
    width: 8px;
    position: absolute;
    top: 0;
    left: 0;
    background: #e74c4c;
  }
`

const Category = () => {
  const { type } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        `http://localhost:4000/products?category=${type}`
      );
      const cards = await data.json();
      setData(cards);
    };
    fetchData();
  }, [type]);
  return (
    <>
      <Banner />
      <Menu />
      <Container>
      <Title>Меню</Title>
        <Cards>
          {data && data.map((cart) => <Product data={cart} key={cart.id} />)}
        </Cards>
      </Container>
    </>
  );
};

export default Category;
