import "./styles.css";

function Card(Props: any) {
  return (
    <>
      <section className="container">
        <div className="card">
          <h3>{Props.lab_name}</h3>
          <p><img src={Props.imageSala} width={"100%"}/></p>

          <p>horario: {Props.user_ocupado}</p>
          <p>Responsável: {Props.responsavel}</p>
          <p>Turma: {Props.turma} - {Props.componente}</p>
          {/* <div className="card-btn">
            <Link to="/Reservado">Agendar</Link>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Card;

