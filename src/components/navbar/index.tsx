import { Link } from "react-router-dom";
import "./styles.css";

import logo from "./imgs/logo.svg";

function NavBar() {
  return (
    <header>
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/reservados">Reservados</Link>
        <Link to="/reserva">Reserva</Link>
      </div>
    </header>
  );
}

export default NavBar;
