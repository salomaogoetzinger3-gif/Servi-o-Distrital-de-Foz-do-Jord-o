import "./hero.style.css";

export function Hero() {
  return (
    <>
      <section className="hero">
        <div className="hero-texto">
          <h1 className="titulo">
            SERVIÇO DISTRITAL <span>DE FOZ DO JORDÃO</span>
            <hr className="hr" />
            <p className="subtitulo">
              Tabelionato de Notas e Registro Civil das Pessoas Naturais
            </p>
          </h1>
          <p className="info">
            Nascimento, casamento, procurações, óbitos, escrituras e
            reconhecimento de firma, com fé pública e atendimento aqui na
            cidade!
          </p>
          <div className="hero-btn-align">
            <a href="#" className="hero-btn-1">
              Ver serviços
            </a>
            <a href="#" className="hero-btn-2">
              Solicitar 2ª Via de certidão
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
