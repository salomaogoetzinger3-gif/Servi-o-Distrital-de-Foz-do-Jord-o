import "./notary.style.css";

export function Notary() {
  return (
    <>
      <div className="text-notary">
        <h1 className="text-notary-titulo">O cartório</h1>
      </div>
      <section className="notary">
        <div className="notary-left">
          <ul className="notary-left-list">
            <li>
              <p>Nome oficial</p>
              <h4>Ofício de Registro Civil e Tabelionato de Notas</h4>
            </li>
            <li>
              <p>Atribuições</p>
              <h4>
                Nascimentos, casamentos, óbitos, interdições e tutelas, notas
              </h4>
            </li>
            <li>
              <p>Abrangência</p>
              <h4>Município de Foz do Jordão, Comarca de Guarapuava</h4>
            </li>
            <li>
              <p>Instalação</p>
              <h4>3 de junho de 2004</h4>
            </li>
            <li>
              <p>CNS</p>
              <h4>08.330-3</h4>
            </li>
            <li>
              <p>CNPJ</p>
              <h4>06.208.455/0001-83</h4>
            </li>
          </ul>
        </div>
        <div className="notary-right">
          <p className="notary-right-title">nossa equipe</p>
          <ul className="notary-right-list">
            <li>
              <a href="#" className="notary-person">
                <h3>CP</h3>
                <div className="notary-person-aligh">
                  <h2>Celson Luiz Pacheco</h2>
                  <p>Oficial titular</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="notary-person">
                <h3>OD</h3>
                <div className="notary-person-aligh">
                  <h2>Odynéia Kaise Dalla Cort</h2>
                  <p>Oficial substituta</p>
                </div>
              </a>
            </li>
            <li>
              <a href="#" className="notary-person">
                <h3>CA</h3>
                <div className="notary-person-aligh">
                  <h2>Cleonice de Jesus Amancio</h2>
                  <p>Escrevente</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
