import { useEffect, useState } from "react";
import Card from "../../components/card/card";
import "./styles.css";
import logo from "../../images/logo.svg";

function Loading() {
  return (
    <div className="carregando">
      <div className="spinner">
        <img src={logo} />
      </div>
      <div>Carregando...</div>
    </div>
  );
}

interface Lab {
  id: number;
  lab_name: string;
  imagemSala: string;
  user_ocupado: string;
  responsavel: string;
  turma: string;
  componente: string;
}

function Reserva() {
  const [labs, setLabs] = useState<Lab[]>([]);

  useEffect(() => {
    fetch("src/services/data.json")
      .then((resp) => resp.json())
      .then((data: any) => {
        setLabs(data);
        // setLabs(data.response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   fetch("https://sireag.squareweb.app/sireag/lab/find/all/")
  //     .then((resp) => resp.json())
  //     .then((data: any) => {
  //       setLabs(data.response);
  //       console.log(data.response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="container">
      <div className="content">
        <div>
          <h2>Reserva</h2>
        </div>
        <div className="labs">
          {labs.length > 0 ? (
            labs.map((lab, i) => {
              return (
                <Card
                  key={i}
                  id={lab.id}
                  lab_name={lab.lab_name}
                  imagemSala={lab.imagemSala}
                  user_ocupado={lab.user_ocupado}
                  responsavel={lab.responsavel}
                  turma={lab.turma}
                  componente={lab.componente}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
}

export default Reserva;
