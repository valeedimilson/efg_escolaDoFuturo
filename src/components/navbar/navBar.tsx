import "./styles.css";

import Links from "./links";
import logo from "./imgs/logo.svg";

import {
  IoCloseCircleOutline,
  IoEllipsisVerticalCircleOutline,
} from "react-icons/io5";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const menuMobile = document.querySelector("#menuMobile");
  const menuMobileBg = document.querySelector("#menuMobileBg");
  const [estadoMenu, setEstadoMenu] = useState(false);

  function Botao() {
    if (estadoMenu == false) {
      return (
        <IoEllipsisVerticalCircleOutline
          size="30"
          className="menuMobileBt"
          onClick={function () {
            abreFechaMenu();
          }}
        />
      );
    } else {
      return (
        <IoCloseCircleOutline
          size="30"
          className="menuMobileBt"
          onClick={function () {
            abreFechaMenu();
          }}
        />
      );
    }
  }

  function abreFechaMenu(estado?: boolean) {
    if (estado == false) {
      setEstadoMenu(false);
    } else {
      setEstadoMenu(!estadoMenu);
    }
    console.log(estadoMenu);
  }

  useEffect(() => {
    if (estadoMenu) {
      menuMobile?.classList.remove("menuMobileOculto");
      menuMobileBg?.classList.remove("menuMobileBgOculto");
    } else {
      menuMobile?.classList.add("menuMobileOculto");
      menuMobileBg?.classList.add("menuMobileBgOculto");
    }
  }, [estadoMenu]);
  return (
    <header>
      <Link
        to="/"
        onClick={function () {
          abreFechaMenu(false);
        }}
      >
        <img
          src={logo}
          alt="SIREAG - Sistema de Reserva de Ambientes na Escola do Futuro de Goiás"
        />
      </Link>
      <div className="menuDesktop">
        <Links />
      </div>
      <div
        className="menuMobileBg menuMobileBgOculto"
        id="menuMobileBg"
        onClick={function () {
          abreFechaMenu(false);
        }}
      ></div>
      <div className="menuMobile menuMobileOculto" id="menuMobile">
        <div>
          <Links
            onClick={function () {
              abreFechaMenu(false);
            }}
          />
        </div>
      </div>
      <div className="menuMobileBtdiv">
        <Botao />
      </div>
    </header>
  );
}
export default NavBar;
