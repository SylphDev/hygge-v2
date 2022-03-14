import React from "react";
import { Navbar } from "../../components/App/Navbar/Navbar";
import Menu from "../../assets/images/Menu.png";
import logoFullBlack from "../../assets/logos/logo-full-black.png";
import "./Header.css";

const Header = () => {
  const openMenu = () => {
    const menu = document.getElementsByClassName("Navbar-container");
    if (menu[0].style.display === "") {
      menu[0].style.display = "inline-block";
    } else {
      menu[0].style.display = "";
    }
  };

  return (
    <header>
      <figure className="Logo-icon">
        <img src={logoFullBlack} alt="Logo transparente" />
      </figure>
      <Navbar />
      <figure className="Menu-icon">
        <img onClick={openMenu} src={Menu} alt="Menu" />
      </figure>
    </header>
  );
};

export { Header };
