import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import "./styles.css";

interface Lab {
  id: number;
  lab_name: string;
  lab_status: string;
  user_ocupado: string;
}
function Reserva() {
  const [labs, setLabs] = useState<Lab[]>([]);
  
  useEffect(() => {
    fetch("https://sireag.squareweb.app/sireag/lab/find/all/")
      .then((resp) => resp.json())
      .then((data: any) => {
        setLabs(data.response);
        console.log(data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="container">
      <div className="content">
        <div>
          <h2>Reserva</h2>
        </div>
        <div className="labs">
          {labs.length > 0
            ? labs.map((lab, i) => {
                return (
                  <Card
                    key={i}
                    id={lab.id}
                    lab_name={lab.lab_name}
                    lab_status={lab.lab_status}
                    user_ocupado={lab.user_ocupado}
                  />
                );
              })
            : "Carregando Labs..."}
        </div>
      </div>
    </div>
  );
}

export default Reserva;
