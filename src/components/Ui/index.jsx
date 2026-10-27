import { Link } from 'react-router-dom'

const desenhos = {
  telefone: <path d="M5 4h3.5l1.8 4.5-2.2 1.4a11 11 0 0 0 5 5l1.4-2.2L19 14.5V18a2 2 0 0 1-2 2A13 13 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  local: <><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  relogio: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  check: <path d="m5 12 4 4 10-10" />,
  seta: <path d="m9 6 6 6-6 6" />,
  escudo: <><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6z" /><path d="m9 12 2 2 4-4" /></>,
  pessoa: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  conversa: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9h8M8 12h5" /></>,
  predio: <><path d="m3 9 9-5 9 5" /><path d="M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20h18" /></>,
}

export function Icone({ nome, tamanho = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={tamanho} height={tamanho} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {desenhos[nome]}
    </svg>
  )
}

export function Ir({ to, children, ...resto }) {
  if (to?.startsWith('/')) return <Link to={to} {...resto}>{children}</Link>
  const fora = to?.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}
  return <a href={to} {...fora} {...resto}>{children}</a>
}

export function Check({ children }) {
  return (
    <li>
      <span className="ok"><Icone nome="check" tamanho={12} /></span>
      <div>{children}</div>
    </li>
  )
}

export function Linhas({ itens }) {
  return (
    <dl className="linhas">
      {itens.map(([nome, valor]) => (
        <div key={nome}>
          <dt>{nome}</dt>
          <dd>{valor}</dd>
        </div>
      ))}
    </dl>
  )
}

export function Campo({ rotulo, dica, children }) {
  return (
    <label className="campo">
      <span>{rotulo}</span>
      {children}
      {dica && <small>{dica}</small>}
    </label>
  )
}

export function Aceite({ children }) {
  return (
    <label className="aceite">
      <input type="checkbox" name="lgpd" required defaultChecked />
      <span>{children}</span>
    </label>
  )
}
