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
  lab_status: string;
  user_ocupado: string;
}
function Reserva() {
  const [labs, setLabs] = useState<Lab[]>([]);

  useEffect(() => {
    fetch("src\data.json")
      .then((resp) => resp.json())
      .then((data: any) => {
        setLabs(data.response);
        console.log(data.response);
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
                  lab_name="Informática"
                  imageSala="src\images\imageTeste.png"
                  user_ocupado="de 00h00 as 23h00"
                  responsavel="John_2"
                  turma="3ºB"
                  componente="Front-End"
                  /*lab_status=""
                  user_ocupado={lab.user_ocupado}*/
                  

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
