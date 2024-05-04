import "./styles.css";
import { Link } from "react-router-dom";

function Card(Props: any) {
  return (
    <>
      <section className="container">
        <div className="card">
          <h3>{Props.lab_name}</h3>
          <p>Status: {Props.lab_status}</p>
          <p>Ocupado: {Props.user_ocupado}</p>
          <p>Responsável: nome?</p>
          <p>07:30 - 17:00</p>
          <div className="card-btn">
            <Link to="/Reservado">Agendar</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Card;

