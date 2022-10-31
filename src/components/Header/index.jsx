import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Container from "../../layout/Container";
import logo from "../../images/logo.svg";
import { headerLink, icons } from "./headerItems";

import classes from "./Header.module.scss";

const HeaderLink = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 2em;
`;

const HeaderButton = styled.button`
  border: none;
  background: none;
  & svg {
    width: 35px;
    height: 20px;
  }
`;

const SelectLocation = styled.button`
  background: none;
  border: none;
  color: #e43a3a;
  font-weight: 500;
  font-size: 20px;
  margin-left: 30px;
  cursor: pointer;
`;

const Window = styled.div`
  background: ${({ change }) => (change ? "red" : "none")};
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [change, setChange] = useState(false);
  useEffect(() => {
    open === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "");
  }, [open]);

  return (
    <header className={classes["header"]}>
      <Container className={classes["header__container"]}>
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
        <div className={classes["header__content"]}>
          <HeaderLink>
            {headerLink.map(({ name, link }, i) => (
              <li key={i}>
                <Link className={classes['header__link']} to={link}>{name}</Link>
              </li>
            ))}
          </HeaderLink>
          <HeaderLink className={classes["header__iconsList"]}>
            {icons.map(({ icon }, i) => (
              <li key={i} className={classes["header__icon"]}>
                {icon}
              </li>
            ))}
          </HeaderLink>
          <HeaderButton>
            <GiHamburgerMenu />
          </HeaderButton>
        </div>
      </Container>
      <>
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
      </>
    </header>
  );
};

export default Header;
