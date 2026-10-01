import "./footer.style.css";

export function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-img-text">
          <img width={400} src="/logo-servico-distrital.png" alt="" />
          <p className="footer-paragraf">
            Serviços de registro civil com segurança jurídica, acolhimento e
            compromisso com a cidadania.
          </p>
        </div>
        <div className="footer-list-align">
          <ul className="footer-list">
            <li className="footer-icon">
              <p className="footer-icon-list">SERVIÇOS</p>
            </li>
            <li className="footer-icon">
              <a href="#" className="footer-icon-a">
                Nascimento
              </a>
            </li>
            <li className="footer-icon">
              <a href="#" className="footer-icon-a">
                Casamento
              </a>
            </li>
            <li className="footer-icon">
              <a href="#" className="footer-icon-a">
                Óbitos
              </a>
            </li>
            <li className="footer-icon">
              <a href="#" className="footer-icon-a">
                Certidões
              </a>
            </li>
          </ul>
          <>
            <ul className="footer-list">
              <li className="footer-icon">
                <p className="footer-icon-list">ATENDIMENTO</p>
              </li>
              <li className="footer-icon">
                <a href="#" className="footer-icon-a">
                  Documentos necessários
                </a>
              </li>
              <li className="footer-icon">
                <a href="#" className="footer-icon-a">
                  Dúvidas frequentes
                </a>
              </li>
              <li className="footer-icon">
                <a href="#" className="footer-icon-a">
                  Fale conosco
                </a>
              </li>
              <li className="footer-icon">
                <a href="#" className="footer-icon-a">
                  Privacidade
                </a>
              </li>
            </ul>
          </>
        </div>
      </section>
      <section className="direitos">
        <p>
          © 2026 Serviço Central de Registro Civil. Todos os direitos
          reservados.
        </p>
        <p>Acompanhe nossas informações oficiais</p>
      </section>
    </>
  );
}
