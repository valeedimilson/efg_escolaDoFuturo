import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./styles.css";
import logo from "./imgs/logo.svg";

import { CgMenuRound } from "react-icons/cg";
import { RiCloseCircleLine } from "react-icons/ri";

import Rotas from "./Rotas";

const rotas = Rotas();

function NavBar() {
  let paginaAtual = useLocation().pathname;

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
        <img src={logo} />
      </div>
      <div className="menuMobile">
        <BtMobile />
      </div>
      <div className={menuAberto}>
        <div className="links">
          <ul>
            {rotas.map((rota, posicao) => (
              <li key={posicao}>
                <Link
                  to={rota.url}
                  onClick={function () {
                    toggle("menu fechado");
                  }}
                  className={paginaAtual == rota.url ? "menuPaginaAtual" : ""}
                >
                  {rota.nome}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
