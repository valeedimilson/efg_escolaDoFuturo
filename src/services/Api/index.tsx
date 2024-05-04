let dadosDaAPI = [
  {
    status: "OK",
    response: {
      id: 2,
      lab_name: "e-esport",
      lab_status: "funcional",
      user_ocupado: "user_ocupado",
    },
  },
  {
    status: "OK",
    response: {
      id: 4,
      lab_name: "informatica",
      lab_status: "funcional",
      user_ocupado: "user_ocupado",
    },
  },
  {
    status: "OK",
    response: {
      id: 1,
      lab_name: "robotica",
      lab_status: "livre",
      user_ocupado: "vazio",
    },
  },
  {
    status: "OK",
    response: {
      id: 5,
      lab_name: "drone",
      lab_status: "com problemas",
      user_ocupado: "john",
    },
  },
];
function Api() {
  return dadosDaAPI;
}

export default Api;
