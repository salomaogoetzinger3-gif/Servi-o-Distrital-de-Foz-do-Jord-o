import { useState } from "react";
import "./header.style.css";

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [texto, setTexto] = useState("");
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
      <div className="search">
        <input
          type="text"
          placeholder="Pesquisar..."
          value={texto}
          className={aberto ? "search-input aberto" : "search-input"}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button
          type="button"
          className="search-btn"
          onClick={() => {
            setAberto(!aberto);
          }}
          aria-label="Abrir pesquisa"
        >
          <i class="fi fi-rs-search"></i>
        </button>
        <a className="header-a1" href="#">
          Fale conosco
        </a>
      </div>
    </section>
  );
}
