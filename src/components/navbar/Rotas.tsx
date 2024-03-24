import { ReactNode } from "react";
import Home from "../../pages/Home";
import Reserva from "../../pages/reserva";
import Reservados from "../../pages/reservados";

function Rotas() {
  interface Rota {
    url: string;
    nome: string;
    elemento: ReactNode;
  }

  const rotas: Rota[] = [
    {
      url: "/",
      nome: "Home",
      elemento: <Home />,
    },
    {
      url: "/reservado",
      nome: "Reservado",
      elemento: <Reservados />,
    },
    {
      url: "/reserva",
      nome: "Reserva",
      elemento: <Reserva />,
    },
  ];

  return rotas; //devolve a lista de rotas para o navbar e para o RotasPaginas
}

export default Rotas;
