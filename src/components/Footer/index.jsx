import "./footer.style.css";

export function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-img-text">
          <h1 className="footer-titulo">
            SERVIÇO DISTRITAL <span>DE FOZ DO JORDÃO</span>
            <hr className="footer-hr" />
            <p className="footer-paragraf">
              Tabelionato e Registro Civil das pessoas naturais. Atende o
              municipio de Foz do Jordão, comarca de Guarapuava, Paraná
            </p>
          </h1>
        </div>
        <div className="footer-list-align">
          <ul className="footer-list">
            <li className="footer-icon">
              <p className="footer-icon-list">Responsaveis</p>
            </li>
            <li className="footer-icon">
              <a href="#" className="footer-icon-a">
                Titular: Celson Luiz Pacheco
              </a>
            </li>
            <li className="footer-icon">
              <a href="#" className="footer-icon-a">
                Substituta: Odynéia Kaise Dalla Cort
              </a>
            </li>
            <li className="footer-icon">
              <a href="#" className="footer-icon-a">
                Escrevente: Cleonice de Jesus Amancio
              </a>
            </li>
          </ul>
          <>
            <ul className="footer-list">
              <li className="footer-icon">
                <p className="footer-icon-list">Dados oficiais</p>
              </li>
              <li className="footer-icon">
                <a href="#" className="footer-icon-a">
                  CNS 08.330-3
                </a>
              </li>
              <li className="footer-icon">
                <a href="#" className="footer-icon-a">
                  CNPJ 06.208.455/0001-83
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
