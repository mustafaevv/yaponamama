import React from "react";
import { useSelector } from "react-redux";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from "../../layout/Container";
import logo from "../../images/logo.svg";
import { getItemsCount } from "../../redux/cart";
import { headerLink } from "./headerItems";

import classes from "./Header.module.scss";

const HeaderLink = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2em;
  & li a {
    color: #000;
  }
`;

const SelectLocation = styled.button`
  background: none;
  border: none;
  color: #e43a3a;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
`;

const Header = () => {
  const countItem = useSelector(getItemsCount);

  return (
    <header className={classes["header"]}>
      <Container className={classes["header__container"]}>
        <ul className={classes["header__item"]}>
          <Link className={classes["header__logo"]} to="/">
            <img
              className={classes["header__logo-img"]}
              src={logo}
              alt="Yaponamama Logo"
            />
          </Link>
          <SelectLocation>ВЫБЕРИТЕ ГОРОД</SelectLocation>
        </ul>
        <ul className={classes["header__content"]}>
          <HeaderLink>
            {headerLink.map(({ name, link }, i) => (
              <li key={i}>
                <Link className={classes["header__link"]} to={link}>
                  {name}
                </Link>
              </li>
            ))}
          </HeaderLink>
          <HeaderLink className={classes["header__iconsList"]}>
            
            <li className={classes["header__icon"]}>
              <Link to="/cart">
                <BiShoppingBag />
                {Boolean(countItem) && (
                  <p className={classes["header__counter"]}>{countItem}</p>
                )}
              </Link>
            </li>
          </HeaderLink>
          
        </ul>
      </Container>
    </header>
  );
};

export default Header;
