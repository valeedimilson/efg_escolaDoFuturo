import { Link } from "react-router-dom";
import "./styles.css";

function Home() {
  return (
    <div className="container">
      <div className="content">
        <h2>Hello World - Home</h2>
        <Link to="/login">Pagina de Login</Link>
        <Link to="/cadastro">Pagina de Cadastro</Link>
      </div>
    </div>
  );
}

export default Home;
