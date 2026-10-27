import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { Check } from '../../components/Ui'
import { site } from '../../data/site'

const partes = [
  ['Emolumentos', 'Valor do ato, definido na tabela oficial do TJPR.'],
  ['Fundos e taxas', 'Repasses previstos em lei, como o Funrejus.'],
  ['ISS', 'Imposto municipal, quando previsto em lei local.'],
]

const faixa = 'Calculado por faixa de valor do bem'

const atos = [
  ['Registro Civil', [
    ['Registro de nascimento e 1ª certidão', null, true],
    ['Registro de óbito e 1ª certidão', null, true],
    ['Habilitação e casamento no cartório'],
    ['Casamento fora do cartório (diligência)'],
    ['2ª via de certidão (breve relato)'],
    ['Certidão de inteiro teor'],
  ]],
  ['Tabelionato de Notas', [
    ['Reconhecimento de firma (por assinatura)'],
    ['Autenticação de cópia (por página)'],
    ['Procuração pública'],
    ['Escritura de compra e venda', faixa],
    ['Escritura de divórcio ou inventário', faixa],
    ['Ata notarial'],
  ]],
]

export function Custas() {
  return (
    <Layout
      titulo="Tabela de custas"
      texto="Quanto custa cada serviço e o que compõe o valor. Você sempre recebe o recibo com todos os itens discriminados."
    >
      <div className="bloco">
        <h2>Como o valor é formado</h2>
        <p>Os valores são iguais em todos os cartórios do Paraná para o mesmo ato e são atualizados pelo Tribunal de Justiça.</p>
        <div className="soma">
          {partes.map(([titulo, texto], i) => (
            <Fragment key={titulo}>
              {i > 0 && <span>+</span>}
              <div className="box">
                <h2>{titulo}</h2>
                <p className="nota">{texto}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="colunas">
        <div className="box tabela">
          <div className="cab"><span>Ato</span><span>Valor</span></div>
          {atos.map(([grupo, itens]) => (
            <Fragment key={grupo}>
              <div className="grupo">{grupo}</div>
              {itens.map(([ato, sub, gratis]) => (
                <div key={ato}>
                  <span>{ato}{sub && <small>{sub}</small>}</span>
                  {gratis ? <span className="gratis">Gratuito</span> : (
                    <a className="mais" href={site.tjpr} target="_blank" rel="noreferrer">
                      {sub ? 'Ver faixas na tabela ›' : 'Ver valor na tabela ›'}
                    </a>
                  )}
                </div>
              ))}
            </Fragment>
          ))}
        </div>

        <aside className="lateral">
          <div className="box">
            <h2>Tabela oficial</h2>
            <p className="nota">Consulte todos os valores atualizados no site do Tribunal de Justiça do Paraná.</p>
            <a className="btn cheio" href={site.tjpr} target="_blank" rel="noreferrer">Abrir tabela do TJPR</a>
          </div>
          <div className="box">
            <h2>Gratuidades</h2>
            <ul className="checks">
              <Check>Registro de nascimento e de óbito, com a primeira certidão, para todos.</Check>
              <Check>Habilitação, registro e primeira certidão de casamento para quem declarar baixa renda.</Check>
              <Check>Demais casos previstos em lei ou por decisão judicial.</Check>
            </ul>
          </div>
          <div className="box">
            <h2>Quer um orçamento?</h2>
            <p className="nota">Diga qual ato precisa e retornamos com o valor exato.</p>
            <Link className="btn claro cheio" to="/contato">Pedir orçamento</Link>
          </div>
        </aside>
      </div>
    </Layout>
  )
}
