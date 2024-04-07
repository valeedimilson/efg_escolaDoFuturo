import "./styles.css";
import logoImage from "../../images/logo.svg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="containerLogin">
      <div className="content contentLogin">
        <div className="formLogin">
          <form action="/rotaParaLogarNoSistema" method="post">
            <div className="formTitulo">
              <h2>Login</h2>
            </div>
            <div>
              <div>
                <div className="ladoALado">
                  <div>Usuario</div>
                </div>
                <input type="text" name="usuario" />
              </div>
              <br />
              <div>
                <div className="ladoALado">
                  <div>Senha</div>
                  <div>
                    <Link to="/esqueceusenha">Esqueceu a senha?</Link>
                  </div>
                </div>
                <input type="password" name="senha" />
              </div>

              <div>
                <input type="checkbox" name="lembreme" /> Lembre-me
              </div>
            </div>
            <div className="formLoginBt">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="divNovaConta">
            Não tem uma conta? <Link to="/cadastro">Clique aqui</Link>
          </div>
        </div>
        <div>
          <img src={logoImage} alt="Logo Site" id="logoImage" />
        </div>
      </div>
    </div>
  );
}

export default Login;
