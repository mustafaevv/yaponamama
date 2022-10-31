import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import Product from "../../components/Product";
import Container from "../../layout/Container";

const Cards = styled.div`
  margin: 100px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Home = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/products");
      const cards = await data.json();
      setData(cards);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Banner />
      <NavLink />
      <Container>
        <Cards>
          {data && data.map((card) => <Product key={card.id} data={card} />)}
        </Cards>
      </Container>
    </div>
  );
};

export default Home;
