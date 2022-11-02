import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiUser } from "react-icons/fi";
import { BiShoppingBag, BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import classNames from "classnames";

import Container from "../../layout/Container";
import logo from "../../images/logo.svg";
import { headerLink } from "./headerItems";
import links from "../../router";

import classes from "./Header.module.scss";
import "./index.css";
import { getItemCount } from "../../redux/cart";
import { useSelector } from "react-redux";

const HeaderLink = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2em;
  & li a {
    color: #000;
  }
`;

const HeaderButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  & svg {
    width: 35px;
    height: 30px;
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
  const countItem = useSelector(getItemCount);
  const [open, setOpen] = useState(false);
  const navRef = useRef();
  useEffect(() => {
    open === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [open]);

  const openNavbar = () => navRef.current.classList.toggle("open");

  return (
    <header className={classes["header"]}>
      <Container className={classes["header__container"]}>
        <ul className={classes["header__item"]}>
          <a className={classes["header__logo"]} href="/">
            <img
              className={classes["header__logo-img"]}
              src={logo}
              alt="Yaponamama Logo"
            />
          </a>
          <SelectLocation onClick={() => setOpen((state) => !state)}>
            ВЫБЕРИТЕ ГОРОД
          </SelectLocation>
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
              <a href="">
                <BiSearch />
              </a>
            </li>
            <li className={classes["header__icon"]}>
              <a href="">
                <FiUser />
              </a>
            </li>
            <li className={classes["header__icon"]}>
              <Link to="/cart">
                <BiShoppingBag />
                {Boolean(countItem) && (
                  <p className={classes["header__counter"]}>{countItem}</p>
                )}
              </Link>
            </li>
          </HeaderLink>
          <HeaderButton onClick={openNavbar}>
            <GiHamburgerMenu />
          </HeaderButton>
        </ul>
        {/* <ul ref={navRef} className="header__list">
          <button className="header__button nav-btn nav-close-btn " onClick={openNavbar}>
            <AiOutlineClose />
          </button>
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.link}>{link.name}</a>
            </li>
          ))}
        </ul> */}
      </Container>
      <div
        className={classNames(
          classes["header__modal"],
          open ? classes["header__modal_active"] : ""
        )}
      >
        <div className={classes["header__top"]}>
          <h2>Выберите город</h2>
          <button onClick={() => setOpen((state) => !state)}>
            <AiOutlineClose />
          </button>
        </div>
        <div className={classes["header__bottom"]}>
          <ul>
            <li>
              <a className={classes["header__location"]} href="/">
                Ташкент
              </a>
            </li>
            <li>
              <a className={classes["header__location"]} href="/">
                Самарканд
              </a>
            </li>
            <li>
              <a className={classes["header__location"]} href="/">
                Бухара
              </a>
            </li>
            <li>
              <a className={classes["header__location"]} href="/">
                Чирчик
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
