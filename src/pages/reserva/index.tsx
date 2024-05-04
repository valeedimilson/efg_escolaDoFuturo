import "./styles.css";

import Cards from "../../services/Api";

function Reserva() {
  return (
    <div className="container">
      <div className="content">
        <h2>Reserva</h2>
        <Cards />
      </div>
    </div>
  );
}

export default Reserva;
