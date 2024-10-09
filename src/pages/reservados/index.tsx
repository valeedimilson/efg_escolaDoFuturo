import "./styles.css";
import Card from "../../components/card/card";

function Reservados() {
  return (
    <div className="container">
      <div className="content">
        <h2>Laboratorios e Salas:</h2>
        <div className="cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Reservados;
