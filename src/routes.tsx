import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./pages/Home";
import Reservados from "./pages/reservados";
import Reserva from "./pages/reserva";
function MainRoutes() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservados" element={<Reservados />} />
        <Route path="/reserva" element={<Reserva />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
