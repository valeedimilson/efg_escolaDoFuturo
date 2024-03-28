import { useState } from "react";
import "./styles.css";
import logo from "./imgs/logo.svg";

import { CgMenuRound } from "react-icons/cg";
import { RiCloseCircleLine } from "react-icons/ri";

import Links from "./links";

function NavBar() {
  const [menuAberto, setMenuAberto] = useState("menu");

  function toggle(menuAberto: String) {
    if (menuAberto == "menu fechado" || menuAberto == "") {
      setMenuAberto("menu fechado");
    } else {
      setMenuAberto("menu aberto");
    }
  }
  function BtMobile() {
    if (menuAberto == "aberto" || menuAberto == "menu aberto") {
      return (
        <RiCloseCircleLine
          size="30"
          className="menuMobileBt"
          onClick={function () {
            toggle("menu fechado");
          }}
        />
      );
    }

    return (
      <CgMenuRound
        size="30"
        className="menuMobileBt"
        onClick={function () {
          toggle("menu aberto");
        }}
      />
    );
  }

  return (
    <header>
      <div className="logo">
        <img
          src={logo}
          alt="SIREAG - Sistema de Reserva de Ambientes na Escola do Futuro de Goiás"
        />
      </div>
      <div className="menuMobile">
        <BtMobile />
      </div>
      <div className={menuAberto}>
        <div className="links">
          <Links />
        </div>
      </div>
    </header>
  );
}
export default NavBar;
