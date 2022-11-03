import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../../layout/Container";
import navLinkItems from "./navLinkItem";

const Section = styled.section`
  position: sticky;
  background: #fff;
  top: 7%;
  width: 100%;
  z-index: 2;
  padding: 30px 0;
  box-shadow: 0 4px 5px rgb(0 0 0 / 10%);
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const Links = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 20px;
  font-weight: 400;

  & img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    display: flex;
    transition: 0.3s transform;
    margin-bottom: 10px;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const NavLink = () => {
  return (
    <Section>
      <Container>
        <List>
          {navLinkItems.map(({ img, name, link }) => (
            <li key={link}>
              <Links as={Link} to={link}>
                <img src={img} alt={name} />
                {name}
              </Links>
            </li>
          ))}
        </List>
      </Container>
    </Section>
  );
};

export default NavLink;
