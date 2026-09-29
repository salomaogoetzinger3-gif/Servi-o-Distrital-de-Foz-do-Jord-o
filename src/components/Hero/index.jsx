import "./hero.style.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-texto">
        <p className="info">Serviço, segurança e cidadania</p>
        <h1 className="titulo">NOSSO COMPROMISSO</h1>
        <hr className="hr" />
        <p className="subtitulo">
          Garantir segurança jurídica e acolhimento em todos os momentos
          importantes da sua vida.
        </p>
        <a className="servicos" href="#">
          Conheça nossos serviços
        </a>
      </div>
      <img className="hero-img" src="/Hero photograph.png" alt="" />
    </section>
  );
}
