function Rotas() {
  interface Rota {
    url: string;
    nome: string;
  }

  const rotas: Rota[] = [
    { url: "/", nome: "Home" },
    { url: "/reservados", nome: "Reservados" },
    { url: "/reserva", nome: "Reserva" },
    { url: "/reserva", nome: "Reserva" },
    { url: "/reserva", nome: "Reserva" },
    { url: "/reserva", nome: "Reserva" },
  ];

  return rotas; //devolve a lista de rotas para o navbar
}

export default Rotas;
