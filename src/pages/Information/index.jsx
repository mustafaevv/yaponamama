import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import styled from "styled-components";

import InformationItem from "../../components/InformationItem";
import Container from "../../layout/Container";

const Section = styled.section`
  padding-top: 50px;
`;

const Back = styled.a`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #000;
  text-decoration: none;

  & svg {
    margin-right: 5px;
  }
`;

const Information = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`http://localhost:4000/products?id=${id}`);
      const cards = await data.json();
      setData(cards);
    };
    fetchData();
  }, [id]);
  return (
    <Section>
      <Container>
        <Back as={Link} to="/">
          <FiArrowLeft /> Hазад
        </Back>
        <div>
          {data &&
            data.map((card) => <InformationItem data={card} key={card.id} />)}
        </div>
      </Container>
    </Section>
  );
};

export default Information;
