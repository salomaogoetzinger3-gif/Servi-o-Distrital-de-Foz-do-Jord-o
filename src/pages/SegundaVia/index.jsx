import { useState } from 'react'
import { Layout } from '../../components/Layout'
import { Aceite, Campo, Check } from '../../components/Ui'
import { enviarPorEmail, site } from '../../data/site'

const certidoes = [
  ['Nascimento', 'Segunda via ou inteiro teor', 'nascimento'],
  ['Casamento', 'Com ou sem averbações', 'casamento'],
  ['Óbito', 'Para inventário e benefícios', 'óbito'],
]

const entregas = [
  ['Retirar no cartório', 'Avisamos quando estiver pronta'],
  ['Certidão digital', 'Arquivo com assinatura eletrônica, enviado por e-mail'],
]

function Opcoes({ nome, itens, mudar }) {
  return (
    <div className="opcoes">
      {itens.map(([titulo, texto], i) => (
        <label className="opcao" key={titulo}>
          <input type="radio" name={nome} value={titulo} defaultChecked={i === 0} onChange={() => mudar?.(i)} />
          <span>
            <strong>{titulo}</strong>
            <small>{texto}</small>
          </span>
        </label>
      ))}
    </div>
  )
}

function Etapa({ n, titulo, children }) {
  return (
    <div className="etapa">
      <h2><span className="num">{n}</span>{titulo}</h2>
      {children}
    </div>
  )
}

export function SegundaVia() {
  const [tipo, setTipo] = useState(0)

  return (
    <Layout
      titulo="Pedir 2ª via de certidão"
      texto="Para registros feitos em Foz do Jordão. Preencha os dados e o cartório retorna com o valor e o prazo de emissão."
    >
      <div className="colunas">
        <form className="box pedido" onSubmit={(e) => enviarPorEmail(e, 'Pedido de 2ª via de certidão')}>
          <Etapa n="1" titulo="Qual certidão você precisa?">
            <Opcoes nome="Certidão" itens={certidoes} mudar={setTipo} />
            <div className="par">
              <Campo rotulo="Tipo de certidão">
                <select name="Tipo">
                  <option>Breve relato (mais comum)</option>
                  <option>Inteiro teor</option>
                </select>
              </Campo>
              <Campo rotulo="Finalidade (opcional)">
                <input name="Finalidade" placeholder="Ex.: INSS, casamento" />
              </Campo>
            </div>
          </Etapa>

          <Etapa n="2" titulo="Dados do registro">
            <Campo rotulo="Nome completo da pessoa registrada">
              <input name="Pessoa registrada" required />
            </Campo>
            <div className="par">
              <Campo rotulo={`Data do ${certidoes[tipo][2]}`}>
                <input name="Data" type="date" />
              </Campo>
              <Campo rotulo="Livro, folha e termo (se souber)" dica="Aparece na certidão antiga e agiliza a busca.">
                <input name="Livro, folha e termo" placeholder="Ex.: A-12, fls. 45, nº 3.210" />
              </Campo>
              <Campo rotulo="Nome da mãe">
                <input name="Mãe" placeholder="Nome completo" />
              </Campo>
              <Campo rotulo="Nome do pai">
                <input name="Pai" placeholder="Nome completo" />
              </Campo>
            </div>
          </Etapa>

          <Etapa n="3" titulo="Seus dados para contato">
            <Campo rotulo="Seu nome completo">
              <input name="Solicitante" placeholder="Nome de quem está pedindo" required />
            </Campo>
            <div className="par">
              <Campo rotulo="CPF">
                <input name="CPF" inputMode="numeric" placeholder="000.000.000-00" required />
              </Campo>
              <Campo rotulo="Telefone ou WhatsApp">
                <input name="Telefone" type="tel" placeholder="(42) 00000-0000" required />
              </Campo>
            </div>
            <Campo rotulo="E-mail">
              <input name="E-mail" type="email" placeholder="seuemail@exemplo.com" />
            </Campo>
          </Etapa>

          <Etapa n="4" titulo="Como prefere receber?">
            <Opcoes nome="Entrega" itens={entregas} />
            <Aceite>Autorizo o uso dos meus dados apenas para atender este pedido, conforme a Lei Geral de Proteção de Dados (LGPD).</Aceite>
          </Etapa>

          <div className="enviar">
            <p>Você recebe o valor e o prazo antes de pagar.</p>
            <button className="btn" type="submit">Enviar pedido</button>
          </div>
        </form>

        <aside className="lateral">
          <div className="box">
            <h2>Como funciona</h2>
            <ul className="checks">
              <Check><strong>Envie o pedido</strong> por este formulário.</Check>
              <Check><strong>Confirmamos</strong> o valor e o prazo por telefone ou e-mail.</Check>
              <Check><strong>Faça o pagamento</strong> conforme a orientação do cartório.</Check>
              <Check><strong>Receba a certidão</strong> no balcão ou por e-mail.</Check>
            </ul>
          </div>
          <div className="box">
            <h3>Registro feito em outra cidade?</h3>
            <p className="nota">Peça direto no portal nacional do Registro Civil, que atende cartórios de todo o país.</p>
            <a className="mais" href="https://registrocivil.org.br" target="_blank" rel="noreferrer">Acessar registrocivil.org.br ›</a>
          </div>
          <div className="box">
            <h3>Prefere pedir por telefone?</h3>
            <p className="nota">Ligue para {site.telefone}, de segunda a sexta, das {site.horario.replace(' e ', ' e das ')}.</p>
          </div>
        </aside>
      </div>
    </Layout>
  )
}
