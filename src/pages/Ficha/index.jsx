import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { comoUsar, conferido, fichas } from '../../data/fichas'
import { endereco, site } from '../../data/site'
import {
  carregarMunicipios,
  categoriasCnh,
  conselhos,
  documentoDe,
  documentoGenerico,
  documentos,
  estados,
  forcas,
  legivel,
  listas,
  localDe,
  orgaoPadrao,
  orgaos,
  orgaosFederais,
  tipoDe,
} from './campos'
import '../pages.css'
import './ficha.css'

const campo = (c) => (typeof c === 'string' ? { r: c } : Array.isArray(c) ? { r: c[0], w: c[1] } : c)

const colunas = (pesos) => pesos.map((w) => `minmax(0, ${w}fr)`).join(' ')

function Chip({ children }) {
  return <span className="f-chip">{children}</span>
}

function Lista({ itens }) {
  return (
    <ul className="f-lista">
      {itens.map((item) => {
        const [texto, lei] = typeof item === 'string' ? [item] : item
        return (
          <li key={texto}>
            {texto} {lei && <Chip>{lei}</Chip>}
          </li>
        )
      })}
    </ul>
  )
}

// Campo de digitação com o tipo deduzido do rótulo (data, CPF, lista de opções...).
function Entrada({ rotulo, ...resto }) {
  const { opcoes, ...atributos } = tipoDe(rotulo)
  if (opcoes) {
    return (
      <select defaultValue="" {...resto}>
        <option value="" />
        {opcoes.map((o) => <option key={o}>{o}</option>)}
      </select>
    )
  }
  return <input {...atributos} {...resto} />
}

// Estado e, quando pedido, o município daquele estado; as duas listas em ordem alfabética.
function Local({ nome, rotulo, soEstado }) {
  const [uf, setUf] = useState('')
  const [cidades, setCidades] = useState([])
  const escolhido = useRef('')

  async function escolher(evento) {
    const sigla = evento.target.value
    escolhido.current = sigla
    setUf(sigla)
    setCidades([])
    if (!sigla || soEstado) return
    const lista = await carregarMunicipios()
    if (escolhido.current === sigla) setCidades(lista[sigla] || [])
  }

  return (
    <div className="f-local">
      <select name={soEstado ? nome : `${nome} (estado)`} value={uf} onChange={escolher} aria-label={`${rotulo}: estado`}>
        <option value="">Estado</option>
        {estados.map(([sigla, estado]) => <option key={sigla} value={sigla}>{estado}</option>)}
      </select>
      {!soEstado && (
        <select key={uf} name={nome} defaultValue="" disabled={!uf} aria-label={`${rotulo}: município`}>
          <option value="">{uf && !cidades.length ? 'Carregando...' : 'Município'}</option>
          {cidades.map((c) => <option key={c}>{c}</option>)}
        </select>
      )}
    </div>
  )
}

const opcoesDe = (itens) => [<option key="" value="" />, ...itens.map((i) => <option key={i}>{i}</option>)]

// Documento de identidade numa faixa própria: o tipo escolhido define os campos que aparecem.
function Documento({ pre }) {
  const [tipo, setTipo] = useState('')
  const [orgao, setOrgao] = useState('')
  const federal = orgaosFederais.includes(orgao)
  const base = `${pre} · Documento de identidade`
  const campos = tipo ? documentos[tipo][1] : documentoGenerico

  function escolherTipo(evento) {
    const novo = evento.target.value
    setTipo(novo)
    setOrgao(orgaoPadrao[novo] || '')
  }

  function controle(rotulo, tipoCampo, nome) {
    if (tipoCampo === 'orgao') {
      return (
        <select name={nome} value={orgao} onChange={(e) => setOrgao(e.target.value)}>
          <option value="" />
          {orgaos.map(([sigla, texto]) => (
            <option key={sigla} value={sigla}>{sigla === 'Outro' || sigla === 'Conselho regional' ? texto : `${sigla} – ${texto}`}</option>
          ))}
        </select>
      )
    }
    if (tipoCampo === 'uf') {
      return (
        <select key={federal} name={nome} defaultValue="" disabled={federal}>
          <option value="">{federal ? 'Órgão federal' : ''}</option>
          {!federal && estados.map(([sigla, estado]) => <option key={sigla} value={sigla}>{sigla} – {estado}</option>)}
        </select>
      )
    }
    if (tipoCampo === 'categoria') return <select name={nome} defaultValue="">{opcoesDe(categoriasCnh)}</select>
    if (tipoCampo === 'conselho') return <select name={nome} defaultValue="">{opcoesDe(conselhos)}</select>
    if (tipoCampo === 'forca') return <select name={nome} defaultValue="">{opcoesDe(forcas)}</select>
    if (tipoCampo === 'data') return <input type="date" name={nome} />
    if (tipoCampo === 'cpf') return <Entrada rotulo="CPF" name={nome} />
    if (tipoCampo === 'maiusculas') return <Entrada rotulo="Placa" name={nome} placeholder="" />
    return <input name={nome} />
  }

  return (
    <div className="f-doc" role="group" aria-label="Documento de identidade">
      <div className="f-doc-topo">
        <span>Documento de identidade</span>
        <select name={`${base} (tipo)`} value={tipo} onChange={escolherTipo} aria-label="Tipo de documento">
          <option value="">Escolha o tipo de documento</option>
          {Object.entries(documentos).map(([valor, [texto]]) => <option key={valor} value={valor}>{texto}</option>)}
        </select>
      </div>
      <div className="f-doc-campos" key={tipo}>
        {campos.map(([rotulo, tipoCampo]) => (
          <label className="f-doc-campo" key={rotulo}>
            <small>{rotulo}</small>
            {controle(rotulo, tipoCampo, `${base} · ${rotulo}`)}
          </label>
        ))}
      </div>
    </div>
  )
}

function Opcao({ texto, nome }) {
  const [antes, depois] = texto.split('___')
  const valor = antes.replace(/[\s:(]+$/, '')
  return (
    <label className="f-opcao">
      <input type="checkbox" name={nome} value={valor} />
      <span>{antes}</span>
      {depois !== undefined && (
        <Entrada rotulo={valor} className="f-traco" name={`${nome} · ${valor}`} aria-label={valor} />
      )}
      {depois && <span>{depois}</span>}
    </label>
  )
}

function Grupo({ rotulo, opcoes, pre }) {
  const nome = [pre, rotulo].filter(Boolean).join(' · ')
  return (
    <fieldset className="f-grupo">
      {rotulo && <legend>{rotulo}</legend>}
      <div>
        {opcoes.map((o) => <Opcao key={o} texto={o} nome={nome} />)}
      </div>
    </fieldset>
  )
}

function Campo({ c, pre }) {
  const nome = `${pre} · ${c.r}`
  const local = localDe(c.r)
  if (local) {
    return (
      <div className="f-campo" role="group" aria-label={c.r}>
        <span>{c.r}</span>
        <Local nome={nome} rotulo={c.r} soEstado={local === 'estado'} />
      </div>
    )
  }
  return (
    <label className={c.linhas ? 'f-campo f-area' : 'f-campo'}>
      <span className={c.oculto ? 'f-oculto' : undefined}>{c.r}</span>
      {c.linhas ? <textarea name={nome} rows={c.linhas} /> : <Entrada rotulo={c.r} name={nome} />}
    </label>
  )
}

function Linha({ itens, pre }) {
  const todas = itens.map((c) => (c.g ? c : campo(c)))
  // O RG sai da linha e vira uma faixa própria logo abaixo, com os campos do documento escolhido.
  const temDocumento = todas.some((c) => !c.g && documentoDe(c.r))
  const celulas = todas.filter((c) => c.g || !documentoDe(c.r))
  return (
    <>
      {celulas.length > 0 && (
        <div className="f-linha" style={{ '--cols': colunas(celulas.map((c) => c.w || 1)) }}>
          {celulas.map((c, i) =>
            c.g ? <Grupo key={i} rotulo={c.g[0]} opcoes={c.g[1]} pre={pre} /> : <Campo key={c.r} c={c} pre={pre} />
          )}
        </div>
      )}
      {temDocumento && <Documento pre={pre} />}
    </>
  )
}

function Assinaturas({ rotulos }) {
  const pesos = rotulos.length === 2 && rotulos[0] === 'Local e data' ? [1, 1.6] : rotulos.map(() => 1)
  return (
    <div className="f-assinaturas" style={{ '--cols': colunas(pesos) }}>
      {rotulos.map((r) => (
        <div key={r}>
          <span aria-hidden="true" />
          <small>{r}</small>
        </div>
      ))}
    </div>
  )
}

function Aviso({ titulo, itens }) {
  return (
    <div className="f-aviso">
      <strong>{titulo}</strong>
      <Lista itens={itens} />
    </div>
  )
}

function Regimes({ regimes, pre }) {
  return (
    <div className="f-regimes">
      {regimes.map(([nome, lei, texto]) => (
        <label className="f-regime" key={nome}>
          <input type="radio" name={pre} value={nome} />
          <span>
            <strong>{nome}</strong> <Chip>{lei}</Chip>
            <small>{texto}</small>
          </span>
        </label>
      ))}
    </div>
  )
}

function Tabela({ titulo, cols, linhas, pre }) {
  const nome = [pre, titulo].filter(Boolean).join(' · ')
  return (
    <div className="f-tabela" style={{ '--cols': colunas(cols.map(([, w]) => w)) }}>
      {titulo && <h4 className="f-sub">{titulo}</h4>}
      <div className="f-tabela-cab">
        {cols.map(([c]) => <span key={c}>{c}</span>)}
      </div>
      {Array.from({ length: linhas }, (_, n) => (
        <div className="f-tabela-linha" key={n}>
          {cols.map(([c]) => (
            <label className="f-tabela-celula" key={c}>
              <span>{c}</span>
              <Entrada rotulo={c} name={`${nome} · ${n + 1} · ${c}`} />
            </label>
          ))}
        </div>
      ))}
    </div>
  )
}

function Herdeiros({ itens }) {
  const [lista, setLista] = useState([1])

  return (
    <>
      <div className="f-cols">
        {lista.map((id, i) => (
          <div className="f-herdeiro" key={id}>
            <div className="f-herdeiro-topo">
              <h4 className="f-sub">Herdeiro(a) {i + 1}</h4>
              {lista.length > 1 && (
                <button type="button" className="f-remover" onClick={() => setLista(lista.filter((x) => x !== id))}>
                  Remover
                </button>
              )}
            </div>
            <Itens itens={itens} pre={`Herdeiro(a) ${i + 1}`} />
          </div>
        ))}
      </div>
      <button type="button" className="f-mais" onClick={() => setLista([...lista, Math.max(...lista) + 1])}>
        <span aria-hidden="true">+</span> Adicionar herdeiro(a)
      </button>
    </>
  )
}

function Item({ item, pre }) {
  if (Array.isArray(item)) return <Linha itens={item} pre={pre} />
  if (item.sub) return <h4 className="f-sub">{item.sub}</h4>
  if (item.assinar) return <Assinaturas rotulos={item.assinar} />
  if (item.regimes) return <Regimes regimes={item.regimes} pre={pre} />
  if (item.aviso) return <Aviso titulo={item.aviso[0]} itens={item.aviso[1]} />
  if (item.tabela) return <Tabela titulo={item.tabela[0]} cols={item.tabela[1]} linhas={item.tabela[2]} pre={pre} />
  if (item.herdeiros) return <Herdeiros itens={item.herdeiros} />
  return (
    <div className="f-cols">
      {item.cols.map(([titulo, itens]) => (
        <div key={titulo}>
          <h4 className="f-sub">{titulo}</h4>
          <Itens itens={itens} pre={`${pre} · ${titulo}`} />
        </div>
      ))}
    </div>
  )
}

// Um subtítulo ("Pai", "Mãe") entra no nome dos campos que vêm depois dele,
// para que os dados enviados por e-mail não se misturem.
function Itens({ itens, pre }) {
  let atual = pre
  return itens.map((item, i) => {
    if (item.sub) atual = `${pre} · ${item.sub}`
    return <Item key={i} item={item} pre={atual} />
  })
}

function Lei({ lei }) {
  return (
    <section className="f-lei">
      <div className="f-miolo">
        <h2>
          O que a lei exige <small>Em linguagem simples, com a base legal</small>
        </h2>
        <p className="f-lei-intro">{lei.intro}</p>
        <div className="f-cards">
          {lei.cards.map((c) => (
            <article className={c.largo ? 'f-card largo' : 'f-card'} key={c.t}>
              <h3>{c.t}</h3>
              <Lista itens={c.i} />
            </article>
          ))}
        </div>
        <p className="f-base">
          <strong>Base legal consultada</strong> · {lei.base}
        </p>
      </div>
    </section>
  )
}

function Parte({ f }) {
  function enviar(evento) {
    evento.preventDefault()
    const corpo = [...new FormData(evento.currentTarget)]
      .filter(([, valor]) => String(valor).trim())
      .map(([nome, valor]) => `${nome}: ${legivel(valor)}`)
      .join('\n')
    const assunto = `${f.titulo} (${f.area})`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}`
  }

  return (
    <div className="f-parte">
      <form className="f-papel" onSubmit={enviar}>
        <div className="f-miolo">
          <p className="f-selo">{f.area}</p>
          <h1>{f.titulo}</h1>
          <p className="f-texto">{f.texto}</p>
          <p className="f-como">
            <strong>Como usar esta página:</strong> {f.como || comoUsar}
          </p>

          {f.secoes.map((s, i) => (
            <section className="f-secao" key={s.t}>
              <div className="f-secao-topo">
                <h2>
                  <span className="f-num">{i + 1}</span>
                  {s.t}
                </h2>
                {s.nota && <em>{s.nota}</em>}
              </div>
              <Itens itens={s.itens} pre={s.t} />
            </section>
          ))}

          <Assinaturas rotulos={f.assinaturas} />
          {f.depois && <Aviso titulo={f.depois[0]} itens={f.depois[1]} />}

          <div className="f-acoes">
            <button type="button" className="f-btn claro" onClick={() => window.print()}>Imprimir ficha</button>
            <button type="submit" className="f-btn">Enviar dados por e-mail</button>
          </div>

          <div className="f-uso">
            <strong>Uso exclusivo do cartório</strong>
            <span>Protocolo nº <i /></span>
            <span>Recebido por <i /></span>
            <span>Data <i /></span>
          </div>
        </div>
      </form>
      <Lei lei={f.lei} />
    </div>
  )
}

export function Ficha() {
  const { slug } = useParams()
  const partes = fichas[slug]

  useEffect(() => {
    if (!partes) return
    window.scrollTo(0, 0)
    const anterior = document.title
    document.title = `${partes[0].titulo} · Serviço Distrital de Foz do Jordão`
    return () => {
      document.title = anterior
    }
  }, [partes])

  if (!partes) return <Navigate to="/" replace />

  return (
    <div className="ficha">
      <nav className="f-voltar" aria-label="Navegação">
        <div className="f-miolo">
          <Link to="/"><span aria-hidden="true">←</span> Voltar ao início</Link>
        </div>
      </nav>
      <header className="f-topo">
        <div className="f-miolo">
          <div>
            <p className="f-topo-rotulo">Tabelionato de Notas e Registro Civil das Pessoas Naturais</p>
            <Link className="f-marca" to="/">
              Serviço Distrital <span>de Foz do Jordão</span>
            </Link>
          </div>
          <address>
            <strong>CNS {site.cns}</strong>
            <span>{site.rua} · {site.bairro}</span>
            <span>Seg. a sex., {site.horario}</span>
            <a href={site.tel}>{site.telefone}</a>
          </address>
        </div>
      </header>

      {partes.map((f) => <Parte key={f.titulo} f={f} />)}

      {Object.entries(listas).map(([nome, itens]) => (
        <datalist id={`f-${nome}`} key={nome}>
          {itens.map((i) => <option key={i} value={i} />)}
        </datalist>
      ))}

      <footer className="f-rodape">
        <div className="f-miolo">
          <div>
            <strong>Serviço Distrital de Foz do Jordão</strong>
            <p>{site.email} · {site.telefone}</p>
            <p>{endereco}</p>
            <Link className="f-voltar-rodape" to="/"><span aria-hidden="true">←</span> Voltar ao início</Link>
          </div>
          <p>
            Informação de caráter geral, conferida com o texto das leis federais em {conferido}. Cada caso pode exigir
            documentos adicionais. Os valores seguem a Tabela de custas do TJPR; para saber o valor exato, consulte o
            cartório.
          </p>
        </div>
      </footer>
    </div>
  )
}
