import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../../components/Layout'
import { site } from '../../data/site'

const grupos = [
  ['registro', 'Registro civil', [
    ['Quanto custa registrar um nascimento?', <>
      <p>Nada. O registro de nascimento e a primeira certidão são gratuitos para todos, por lei. Leve a Declaração de Nascido Vivo (DNV) entregue pelo hospital e o documento com foto dos pais. Se os pais forem casados, um deles pode ir sozinho com a certidão de casamento. Se não forem casados, o pai precisa comparecer para constar no registro.</p>
      <p>O prazo é de 15 dias após o nascimento e pode chegar a três meses para quem mora a mais de 30 km do cartório.</p>
    </>],
    ['Quais documentos levar para casar no civil?', <>
      <p>Cada noivo leva:</p>
      <ul>
        <li>RG, CPF e comprovante de residência;</li>
        <li>certidão de nascimento, se for solteiro;</li>
        <li>certidão de casamento com averbação do divórcio, se for divorciado;</li>
        <li>certidão de casamento e de óbito do cônjuge, se for viúvo.</li>
      </ul>
      <p>Também são necessárias duas testemunhas maiores de 18 anos, com documento. Depois da entrega, o cartório publica os proclamas e a habilitação vale por 90 dias.</p>
    </>],
    ['Como registrar um óbito?', <p>Um familiar ou responsável leva a Declaração de Óbito emitida pelo médico, um documento com foto do falecido e o documento de quem declara. O registro e a primeira certidão de óbito são gratuitos.</p>],
    ['Como incluir o nome do pai no registro?', <p>O pai pode fazer o reconhecimento de paternidade direto no cartório, com documento com foto e a certidão de nascimento do filho. Se o filho for menor, a mãe precisa concordar. Se for maior de idade, o próprio filho precisa concordar.</p>],
  ]],
  ['notas', 'Tabelionato de notas', [
    ['Posso fazer divórcio ou inventário direto no cartório?', <p>Sim, quando todos estão de acordo e são acompanhados por advogado. Fale com o cartório para confirmar se o seu caso pode ser feito por escritura.</p>],
    ['Preciso ir pessoalmente para fazer uma procuração?', <p>Quem dá os poderes precisa assinar, no balcão do cartório ou por videoconferência pelo e-Notariado. Leve documento com foto e os dados de quem vai receber a procuração.</p>],
    ['Qual a diferença entre firma por semelhança e por autenticidade?', <p>Na semelhança, o cartório compara a assinatura com a ficha de firma já registrada. Na autenticidade, a pessoa assina na frente do escrevente, o que é exigido, por exemplo, na venda de veículos.</p>],
    ['O que é uma ata notarial?', <p>É um documento em que o tabelião registra fatos que viu ou constatou, como conversas, páginas da internet ou o estado de um imóvel. Ela tem fé pública e serve como prova.</p>],
  ]],
  ['certidoes', 'Certidões', [
    ['Como pedir a 2ª via de uma certidão?', <p>Pelo formulário de <Link to="/segunda-via">2ª via de certidão</Link>, por telefone ou no balcão. Informe o nome da pessoa registrada e, se souber, o livro, a folha e o termo.</p>],
    ['O registro foi feito em outra cidade. Posso pedir aqui?', <p>Sim. O pedido pode ser feito aqui ou pelo portal registrocivil.org.br, que atende cartórios de todo o país.</p>],
    ['Qual a diferença entre breve relato e inteiro teor?', <p>O breve relato traz os dados principais e serve para a maioria dos casos. O inteiro teor copia tudo o que consta no livro, inclusive anotações, e costuma ser pedido para dupla cidadania e processos judiciais.</p>],
  ]],
  ['valores', 'Valores e pagamento', [
    ['Como sei o valor de cada serviço?', <p>Os valores seguem a tabela de custas do TJPR e são iguais em todo o Paraná. Veja a <Link to="/tabela-de-custas">tabela de custas</Link> ou peça um orçamento.</p>],
    ['Quais serviços são gratuitos?', <p>O registro de nascimento e de óbito, com a primeira certidão, para todos. Para quem declara baixa renda, também a habilitação, o registro e a primeira certidão de casamento, além de outros casos previstos em lei.</p>],
  ]],
  ['atendimento', 'Atendimento', [
    ['Qual o horário de atendimento?', <p>De segunda a sexta, das {site.horario.replace(' e ', ' e das ')}.</p>],
    ['Preciso agendar antes de ir ao cartório?', <p>Não é obrigatório. Para escrituras e casamentos, agendar evita espera. Ligue ou envie uma mensagem pela página de <Link to="/contato">contato</Link>.</p>],
  ]],
]

export function Duvidas() {
  const [atual, setAtual] = useState(grupos[0][0])

  return (
    <Layout
      titulo="Dúvidas frequentes"
      texto="Respostas rápidas para as perguntas que mais recebemos no balcão do cartório."
    >
      <div className="colunas inverso">
        <aside className="lateral">
          <nav className="box categorias">
            {grupos.map(([id, nome, perguntas]) => (
              <a key={id} href={`#${id}`} className={atual === id ? 'atual' : ''} onClick={() => setAtual(id)}>
                {nome} <span>{perguntas.length}</span>
              </a>
            ))}
          </nav>
          <div className="box">
            <h2>Não achou sua dúvida?</h2>
            <p className="nota">Ligue para {site.telefone} ou envie uma mensagem.</p>
            <Link className="btn" to="/contato">Fale conosco</Link>
          </div>
        </aside>

        <div className="pilha perguntas">
          {grupos.map(([id, nome, perguntas], g) => (
            <section key={id} id={id}>
              <h2>{nome}</h2>
              {perguntas.map(([pergunta, resposta], i) => (
                <details key={pergunta} open={g === 0 && i < 2}>
                  <summary>{pergunta}</summary>
                  <div>{resposta}</div>
                </details>
              ))}
            </section>
          ))}
        </div>
      </div>
    </Layout>
  )
}
