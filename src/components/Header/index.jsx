import { useState } from "react";
import "./header.style.css";

export function Header() {
  const [aberto, setAberto] = useState(false);
  const [menuAberto, setMenuAberto] = useState(false);
  const [texto, setTexto] = useState("");
  const fecharMenu = () => setMenuAberto(false);
  return (
    <section className="header">
      <img className="header-logo" src="./logo-servico-distrital.png" alt="" />
      <ul className={menuAberto ? "header-ul aberto" : "header-ul"}>
        <li className="header-li">
          <a className="header-a" href="#" onClick={fecharMenu}>
            Inicio
          </a>
        </li>
        <li className="header-li">
          <a className="header-a" href="#" onClick={fecharMenu}>
            Serviços
          </a>
        </li>
        <li className="header-li">
          <a className="header-a" href="#" onClick={fecharMenu}>
            Sobre
          </a>
        </li>
        <li className="header-li">
          <a className="header-a" href="#" onClick={fecharMenu}>
            Contato
          </a>
        </li>
        <li className="header-li-mobile">
          <a className="header-a1" href="#" onClick={fecharMenu}>
            Fale conosco
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
            setMenuAberto(false);
          }}
          aria-label="Abrir pesquisa"
        >
          <i className="fi fi-rs-search"></i>
        </button>
        <a className="header-a1" href="#">
          Fale conosco
        </a>
        <button
          type="button"
          className={menuAberto ? "menu-btn aberto" : "menu-btn"}
          onClick={() => {
            setMenuAberto(!menuAberto);
            setAberto(false);
          }}
          aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuAberto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </section>
  );
}
