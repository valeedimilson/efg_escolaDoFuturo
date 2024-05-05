import Card from "../../components/card/card";
import Api from "../../services/Api";
import "./styles.css";

const labs = Api();

function Reserva() {
  return (
    <div className="container">
      <div className="content">
        <div>
          <h2>Reserva</h2>
        </div>
        <div className="labs">
          {labs.map((lab, i) => (
            <Card
              key={i}
              lab_name={lab.response.lab_name}
              lab_status={lab.response.lab_status}
              user_ocupado={lab.response.user_ocupado}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reserva;
