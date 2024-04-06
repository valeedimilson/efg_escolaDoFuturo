import ReactDOM from "react-dom/client";
import "./Styles/global.css";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/navbar/navBar";
import Footer from "./components/footer/footer";
import PaginasRotas from "./components/PaginasRotas";

import { SpeedInsights } from "@vercel/speed-insights/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <BrowserRouter>
      <NavBar />
      <PaginasRotas />
    </BrowserRouter>
    <Footer />
    <SpeedInsights />
  </>
);
