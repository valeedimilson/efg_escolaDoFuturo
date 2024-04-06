import "./styles.css";
import logoImage from "../../images/logo.svg";
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
                  <div>Esqueceu a senha?</div>
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
            Se não tem uma conta? <a>clique aqui</a>
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
