import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { Check, Icone, Linhas } from '../../components/Ui'
import { site } from '../../data/site'

const certidao = {
  'Solteiro(a)': ['Certidão de nascimento', 'Original, para quem é solteiro.'],
  'Divorciado(a)': ['Certidão de casamento com averbação do divórcio', 'Original e atualizada.'],
  'Viúvo(a)': ['Certidão de casamento e de óbito do cônjuge', 'Originais, para quem é viúvo.'],
}

const passos = [
  ['Entregue os documentos', 'Os noivos vão juntos ao cartório para abrir o processo de habilitação.'],
  ['Publicidade da habilitação', 'O cartório publica a habilitação em meio eletrônico e, com tudo em ordem, emite o certificado em até 5 dias.'],
  ['Habilitação aprovada', 'O certificado vale por 90 dias, e o casamento pode ser feito em qualquer cartório de registro civil.'],
  ['Celebração do casamento', 'No cartório, em outro local escolhido pelo casal ou por videoconferência, com data agendada.'],
]

const relacionados = [
  ['União estável e pacto antenupcial', '/servicos/uniao-estavel-e-pacto'],
  ['2ª via da certidão de casamento', '/segunda-via'],
  ['Averbação de divórcio', '/servicos/averbacao-e-retificacoes'],
]

export function Casamento() {
  const [situacao, setSituacao] = useState('Solteiro(a)')

  const documentos = [
    ['RG e CPF originais', 'Documento oficial com foto de cada noivo.'],
    certidao[situacao],
    ['Comprovante de residência', 'Recente, em nome de cada noivo.'],
    ['Duas testemunhas', 'Maiores de 18 anos, com documento. Podem ser parentes.'],
    ['Autorização dos pais', 'Somente para noivos com 16 ou 17 anos.'],
  ]

  return (
    <Layout
      titulo="Casamento civil"
      trilha={['Serviços', 'Casamento civil']}
      texto="Documentos, etapas e prazos para casar no civil em Foz do Jordão."
    >
      <div className="colunas">
        <div className="pilha">
          <div className="bloco">
            <p className="rotulo">Registro civil</p>
            <h2>O que é</h2>
            <p>O casamento civil é o ato que oficializa a união perante a lei. Antes da cerimônia, o casal passa pela habilitação, em que o cartório confere os documentos e dá publicidade aos proclamas em meio eletrônico.</p>
          </div>

          <div className="bloco">
            <h2>Documentos necessários</h2>
            <p>Escolha a situação de cada noivo. Todos os documentos devem ser originais.</p>
            <div className="abas" role="tablist">
              {Object.keys(certidao).map((nome) => (
                <button
                  key={nome}
                  type="button"
                  role="tab"
                  aria-selected={situacao === nome}
                  className={situacao === nome ? 'atual' : ''}
                  onClick={() => setSituacao(nome)}
                >
                  {nome}
                </button>
              ))}
            </div>
            <ul className="box checks">
              {documentos.map(([titulo, texto]) => (
                <Check key={titulo}>
                  <strong>{titulo}</strong>
                  <p>{texto}</p>
                </Check>
              ))}
            </ul>
          </div>

          <div className="bloco">
            <h2>Como funciona</h2>
            <ol className="passos">
              {passos.map(([titulo, texto], i) => (
                <li key={titulo}>
                  <span className="num">{i + 1}</span>
                  <div>
                    <strong>{titulo}</strong>
                    <p>{texto}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="aviso">
              <p><strong>Regime de bens:</strong> se o casal escolher um regime diferente da comunhão parcial, é preciso fazer antes a escritura de pacto antenupcial.</p>
            </div>
          </div>
        </div>

        <aside className="lateral">
          <div className="box">
            <h2>Resumo</h2>
            <Linhas itens={[
              ['Quem comparece', 'Os dois noivos'],
              ['Certificado de habilitação', 'Em até 5 dias'],
              ['Validade da habilitação', '90 dias'],
              ['Testemunhas', '2, maiores de 18'],
              ['Local da cerimônia', 'Cartório ou outro local'],
              ['Valor', 'Tabela do TJPR'],
            ]} />
            <Link className="btn cheio" to="/contato">Agendar atendimento</Link>
            <a className="btn claro cheio" href={site.tel}>Ligar {site.telefone}</a>
            <p className="nota">Casais com baixa renda podem ter isenção da habilitação, do registro e da primeira certidão.</p>
          </div>
          <p className="rotulo">Serviços relacionados</p>
          {relacionados.map(([nome, para]) => (
            <Link className="box ir" to={para} key={nome}>
              {nome}
              <Icone nome="seta" tamanho={16} />
            </Link>
          ))}
        </aside>
      </div>
    </Layout>
  )
}
