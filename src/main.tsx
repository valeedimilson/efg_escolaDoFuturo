import ReactDOM from "react-dom/client";
import "./Styles/global.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/navBar";
import RotasPaginas from "./components/navbar/RotasPaginas";
import Footer from "./components/footer/footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <NavBar />
      <RotasPaginas />
    </BrowserRouter>
    <Footer />
  </>
);
