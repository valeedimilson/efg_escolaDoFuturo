import "./styles.css";

function Login() {
  return (
    <div className="container">
      <div className="content contentLogin">
        <h2>Pagina de Login</h2>
        <form action="/rotaParaLogarNoSistema" method="post">
          <div>
            <div>
              <label>Usuário</label>
              <input type="text" name="usuario" />
            </div>
            <div>
              <label>Senha</label>
              <input type="password" name="senha" />
            </div>
            <div>
              <button type="submit">Entrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
