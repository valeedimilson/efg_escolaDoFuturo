import "./styles.css";

function Cadastro() {
  return (
    <div className="container">
      <div className="content">
        <h2>Pagina de cadastro</h2>
        <form action="/rotaParaCadastrarUsuario" method="post">
          <div>
            <div>
              <label>Usuário: </label>
              <input type="text" name="usuario" />
            </div>
            <div>
              <label>Senha: </label>
              <input type="password" name="senha" />
            </div>
            <div>
              <label>Email: </label>
              <input type="text" name="usuario" />
            </div>
            <div>
              <label>Telefone: </label>
              <input type="text" name="usuario" />
            </div>
            <div>
              <button type="submit">Cadastrar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cadastro;
