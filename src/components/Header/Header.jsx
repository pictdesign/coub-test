import { useState } from "react";
import Burger from "../Burger/Burger.jsx";
import BurgerMenu from "../BurgerMenu/BurgerMenu.jsx";
import Links from "../../constants/Links.js";
import Link from "../Link/Link";
import Logo from "../Logo/Logo";
import './Header.scss';

export default () => {

  const [burgerOpen, setBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setBurgerOpen(!burgerOpen);
  }

  return (
    <header className="header">
      <BurgerMenu isActive={burgerOpen} />
      <Logo />
      <h2 className="header__title">LOGO</h2>
      <Burger toggleBurger={toggleBurger} isActive={burgerOpen}/>
      <div className="header__square" />
      <nav className="header__nav">
        <ul className="header__list">
          {Links.map((link) => {
            return (
              <li className="header__item" key={link.id}>
                <Link link={link.link} title={link.title} />
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
