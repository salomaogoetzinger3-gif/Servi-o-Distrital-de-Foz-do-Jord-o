import "./header.style.css";

export function Header() {
  return (
    <section className="header">
      <img src="./logo-servico-distrital.png" alt="" />
      <ul className="header-ul">
        <li className="header-li">
          <a className="header-a" href="#">
            Inicio
          </a>
        </li>
        <li className="header-li">
          <a className="header-a" href="#">
            Serviços
          </a>
        </li>
        <li className="header-li">
          <a className="header-a" href="#">
            Sobre
          </a>
        </li>
        <li className="header-li">
          <a className="header-a" href="#">
            Contato
          </a>
        </li>
      </ul>
      <a className="header-a" href="#">
        Agendar atendimento
      </a>
    </section>
  );
}
