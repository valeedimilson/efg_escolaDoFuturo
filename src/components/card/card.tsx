import "./styles.css";
import { Link } from "react-router-dom";

function Card(Props: any) {
  return (
    <>
      <section className="container">
        <div className="card">
          <h3>{Props.lab_name} Lab Informatica</h3>
          <p><img src={Props.imagemSala} width={"100%"}/></p>

          <p>horario: {Props.user_ocupado} de 00h00 as 23h00</p>
          <p>Responsável: {Props.responsavel}JohnJohn</p>
          <p>Turma: {Props.turma}3º B - {Props.componente}FrontEnd</p>
          {/* <div className="card-btn">
            <Link to="/Reservado">Agendar</Link>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Card;

