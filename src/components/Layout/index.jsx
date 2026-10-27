import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { endereco, nav, rodape, site } from '../../data/site'
import { Ir } from '../Ui'
import './layout.css'
import '../../pages/pages.css'

function Marca({ logo }) {
  return (
    <Link className="marca" to="/" aria-label="Serviço Distrital de Foz do Jordão">
      {logo && <img src="/logo-emblema-pena.png" alt="" />}
      <span>
        <strong>Serviço Distrital</strong>
        <small>de Foz do Jordão</small>
      </span>
    </Link>
  )
}

export function Cabecalho() {
  const [aberto, setAberto] = useState(false)
  const { hash } = useLocation()

  // "Início" e "Serviços" (/#servicos) têm o mesmo caminho; a âncora decide qual fica marcado.
  const marcado = (para) => ({ isActive }) => {
    const ancora = para.includes('#') ? para.slice(para.indexOf('#')) : ''
    return isActive && ancora === hash ? 'active' : ''
  }

  return (
    <>
      <div className="topo">
        <p>Tabelionato de Notas e Registro Civil das Pessoas Naturais</p>
        <p>
          Seg. a sex., {site.horario} <a href={site.tel}>{site.telefone}</a>
        </p>
      </div>
      <header className="menu">
        <Marca logo />
        <nav className={aberto ? 'links aberto' : 'links'}>
          {nav.map(([nome, para]) => (
            <NavLink key={para} to={para} end className={marcado(para)} onClick={() => setAberto(false)}>
              {nome}
            </NavLink>
          ))}
        </nav>
        <a className="ligar" href={site.tel}>Ligar {site.telefone}</a>
        <button
          type="button"
          className={aberto ? 'burger aberto' : 'burger'}
          onClick={() => setAberto(!aberto)}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  )
}

export function Rodape() {
  return (
    <footer className="rodape">
      <div className="rodape-grade">
        <div>
          <Marca />
          <p>Tabelionato de Notas e Registro Civil das Pessoas Naturais. {endereco}.</p>
          <a className="claro" href={site.tel}>{site.telefone}</a>
          <a className="claro" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
        {rodape.map(([grupo, itens]) => (
          <div key={grupo}>
            <h3>{grupo}</h3>
            {itens.map((item, i) =>
              !item ? <span key={i} className="espaco" />
                : item[1] ? <Ir key={item[0]} to={item[1]}>{item[0]}</Ir>
                  : <p key={item[0]}>{item[0]}</p>
            )}
          </div>
        ))}
      </div>
      <div className="rodape-base">
        <p>© 2026 Serviço Distrital de Foz do Jordão. CNS {site.cns}, CNPJ {site.cnpj}</p>
        <p>Valores dos atos conforme a tabela de custas do TJPR</p>
      </div>
    </footer>
  )
}

export function Layout({ titulo, texto, trilha = [titulo], children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="cabeca">
        <Cabecalho />
        <section className="banner">
          <nav className="trilha" aria-label="Você está em">
            <Link to="/">Início</Link>
            {trilha.map((item) => <span key={item}>{item}</span>)}
          </nav>
          <h1>{titulo}</h1>
          <div className="divisor" aria-hidden="true"><i></i></div>
          <p>{texto}</p>
        </section>
      </div>

      <main className="conteudo">{children}</main>

      <Rodape />
    </>
  )
}
