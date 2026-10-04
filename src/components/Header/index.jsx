import { useState } from "react";
import "./header.style.css";

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const fecharMenu = () => setMenuAberto(false);
  return (
    <>
      <div className="hero-info-1">
        <p>Tabelionato de notas e registro civil das Pessoas Naturais</p>
        <p>
          Seg.a sex.., 8:30 às 11:15 e 13h às 17h <span>(42) 99806-7505</span>
        </p>
      </div>
      <section className="header">
        <img
          className="header-logo"
          src="./logo-servico-distrital.png"
          alt=""
        />
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
              O cartório
            </a>
          </li>
          <li className="header-li">
            <a className="header-a" href="#" onClick={fecharMenu}>
              Tabela de custas
            </a>
          </li>
          <li className="header-li">
            <a className="header-a" href="#" onClick={fecharMenu}>
              Dúvidas
            </a>
          </li>
          <li className="header-li-mobile">
            <a className="header-a1" href="#" onClick={fecharMenu}>
              Fale conosco
            </a>
          </li>
        </ul>
        <div className="search">
          <a className="header-a1" href="#">
            Ligar (42)99806-7505
          </a>
          <button
            type="button"
            className={menuAberto ? "menu-btn aberto" : "menu-btn"}
            onClick={() => {
              setMenuAberto(!menuAberto);
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
    </>
  );
}
