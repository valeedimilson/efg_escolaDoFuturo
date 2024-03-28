import { Routes, Route } from "react-router-dom";
import Rotas from "./Rotas";
function RotasPaginas() {
  return (
    <Routes>
      {Rotas().map((rota) => (
        <Route key={rota.url} path={rota.url} element={rota.elemento} />
      ))}
    </Routes>
  );
}

export default RotasPaginas;
