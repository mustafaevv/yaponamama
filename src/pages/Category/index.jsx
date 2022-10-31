import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Product from "../../components/Product";
import Menu from "../../components/Menu";
import Container from "../../layout/Container";

const Cards = styled.div`
  margin: 100px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

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
    <div>
      <Menu />
      <Container>
        <Cards>
          {data && data.map((cart) => <Product data={cart} key={cart.id} />)}
        </Cards>
      </Container>
    </div>
  );
};

export default Category;
