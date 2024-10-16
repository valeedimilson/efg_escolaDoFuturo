import { Link, useLocation } from "react-router-dom";

function Links(Props: any) {
  interface Rota {
    url: string;
    nome: string;
  }

  //JSON com os links a serem inseridos no NAVBAR (pode ser inserido de um banco de dados tambem)
  const rotas: Rota[] = [
    // {
    //   url: "/",
    //   nome: "Home",
    // },
    {
      url: "/reserva",
      nome: "Home",
    },
    // {
    //   url: "/reserva",
    //   nome: "Reserva",
    // },
    // {
    //   url: "/cadastro",
    //   nome: "Cadastro",
    // },
  ];

  let paginaAtual = useLocation().pathname; //retorna a rota atual
  return (
    <>
      <ul>
        {rotas.map((rota, posicao) => (
          <li key={posicao}>
            <Link
              to={rota.url}
              className={paginaAtual == rota.url ? "menuPaginaAtual" : ""}
              onClick={Props.onClick}
            >
              {rota.nome}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Links;
