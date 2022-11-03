import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
const api = 'https://63071da7c0d0f2b8012710af.mockapi.io/yaponamama'

const Home = () => {
  const [data, setData] = useState(null);
  const { cart: cartItem } = useSelector((state) => state);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(api);
      const cards = await data.json();
      setData(cards);
    };
    fetchData();
  }, []);
  console.log(process.env.REACT_APP_API_URL);
  return (
    <section>
      <Banner />
      <NavLink />
      <Container>
        <Cards>
          {data &&
            data.map((card) => (
              <Product key={card.id} data={card} select={card.id in cartItem} />
            ))}
        </Cards>
      </Container>
    </section>
  );
};

export default Home;
