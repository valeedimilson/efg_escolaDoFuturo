import "./styles.css";
import logoImage from "../../images/logo.svg";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="containerCadastro">
      <div className="content contentCadastro">
        <div className="formCadastro">
          <form action="/rotaParaCadastroNoSistema" method="post">
            <div className="formTitulo">
              <h2>Cadastro</h2>
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
                  <div>Email</div>
                </div>
                <input type="text" name="usuario" />
              </div>
              <br />
              <div>
                <div className="ladoALado">
                  <div>Senha</div>
                </div>
                <input type="password" name="senha" />
              </div>
              <br />
              <div>
                <div className="ladoALado">
                  <div>Confirme sua Senha</div>
                </div>
                <input type="password" name="senha" />
              </div>
            </div>
            <div className="formCadastroBt">
              <button type="submit">Criar</button>
            </div>
          </form>
          <div className="divNovaConta">
            Já tem uma conta? <Link to="/login">Clique aqui</Link>
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
