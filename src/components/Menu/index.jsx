import React from "react";
import styled from "styled-components";
import Container from "../../layout/Container";
import { Link, useLocation } from "react-router-dom";

import navLinkItems from "../NavLink/navLinkItem";

import classes from "./Menu.module.scss";
import classNames from "classnames";

const Nav = styled.nav`
  padding: 1rem;
  background: #e74c4c;
  box-shadow: 0 4px 4px rgb(231 76 76 / 35%);
  border-radius: 4px;
  margin-bottom: 30px;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 1.5em;
  padding: 10px 0;
  padding-left: 20px;
`;

const Menu = () => {
  const location = useLocation();
  return (
    <Container>
      <Nav>
        <List>
          {navLinkItems.map(({ name, link }, index) => (
            <li key={index}>
              <Link
                className={classNames(
                  classes["header__link"],
                  location.pathname === link
                    ? classes["header__link_active"]
                    : ""
                )}
                to={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </List>
      </Nav>
    </Container>
  );
};

export default Menu;
