import { ReactNode } from "react";
import Home from "../../pages/Home";
import Reserva from "../../pages/reserva";
import Reservados from "../../pages/reservados";
import Cadastro from "../../pages/Cadastro";
import Login from "../../pages/Login";
import EsqueceuSenha from "../../pages/EsqueceuSenha";

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
    {
      url: "/cadastro",
      nome: "Cadastro",
      elemento: <Cadastro />,
    },
    {
      url: "/login",
      nome: "Login",
      elemento: <Login />,
    },
    {
      url: "/esqueceusenha",
      nome: "EsqueceuSenha",
      elemento: <EsqueceuSenha />,
    },
  ];

  return rotas; //devolve a lista de rotas para o navbar e para o RotasPaginas
}

export default Rotas;
