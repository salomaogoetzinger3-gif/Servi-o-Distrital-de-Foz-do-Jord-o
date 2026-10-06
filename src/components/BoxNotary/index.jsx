import "./BoxBotary.style.css";

export function BoxNotary() {
  return (
    <section className="boxNotary">
      <div className="boxNotary-left">
        <h1>Como Pedir a 2ª via de uma certidão</h1>
        <p>
          Se o registro foi feito em Foz do Jordão, você pode pedir pelo
          telefone ou e-mail e só vir buscar
        </p>
        <a href="#">Pedir minha certidão</a>
      </div>
      <section className="boxNotary-right">
        <div></div>
        <div className="boxNotary-right-div">
          <ul className="boxNotary-right-div-list">
            <li>
              <span className="BoxNotary-number">1</span>
              <h2>Envie os dados</h2>
              <p>
                nome completo, data do registro e nome dos pais, por e-mail ou
                telefone
              </p>
            </li>
            <li>
              <span className="BoxNotary-number">2</span>
              <h2>Aguarde a confirmação</h2>
              <p>
                O cartorio localiza o registro e informa o valor e o prazo de
                emissão
              </p>
            </li>
            <li>
              <span className="BoxNotary-number">3</span>
              <h2>Retire no balcão</h2>
              <p>
                Busque a certidão e seu documento com foto, no horario de
                atendimento{" "}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </section>
  );
}
