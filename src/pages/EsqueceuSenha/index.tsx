import "./styles.css";
import logoImage from "../../images/logo.svg";
import { Link } from "react-router-dom";
import validaEmail from "../../components/validaEmail";
function EsqueceuSenha() {
  return (
    <div className="containerEsqueceuSenha">
      <div className="content contentEsqueceuSenha">
        <div className="formEsqueceuSenha">
          <form action="/rotaParaEsqueceuSenha" method="post">
            <div className="formTitulo">
              <h2>Esqueceu sua senha?</h2>
            </div>
            <div>
              Informe o email de cadastro para receber um link de recuperação de
              senha.
            </div>
            <br />
            <div>
              <div>
                <div className="ladoALado">
                  <div>Email</div>
                </div>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => validaEmail(e)}
                />
              </div>
              <br />
            </div>
            <div className="formEsqueceuSenhaBt">
              <button type="submit">Enviar Link</button>
            </div>
          </form>
          <div className="palavraEntreLinhas">ou</div>
          <div className="divNovaConta">
            Se não tem uma conta? <Link to="/cadastro">clique aqui</Link>
          </div>
        </div>
        <div>
          <img src={logoImage} alt="Logo Site" id="logoImage" />
        </div>
      </div>
    </div>
  );
}

export default EsqueceuSenha;
