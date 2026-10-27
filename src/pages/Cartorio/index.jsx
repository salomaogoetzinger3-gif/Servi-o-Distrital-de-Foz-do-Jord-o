import { Layout } from '../../components/Layout'
import { Icone, Ir, Linhas } from '../../components/Ui'
import { site } from '../../data/site'

const numeros = [
  ['2004', 'ano de instalação'],
  ['2', 'atribuições: registro civil e notas'],
  ['3', 'pessoas na equipe de atendimento'],
]

const equipe = [
  ['CP', 'Celson Luiz Pacheco', 'Oficial titular', 'Responsável legal pelo cartório e por todos os atos praticados.'],
  ['OD', 'Odynéia Kaise Dalla Cort', 'Oficial substituta', 'Pratica os atos e responde pelo cartório na ausência do titular.'],
  ['CA', 'Cleonice de Jesus Amancio', 'Escrevente', 'Atendimento ao público, preparo de atos e emissão de certidões.'],
]

const transparencia = [
  ['escudo', 'Política de privacidade', 'Como tratamos os seus dados pessoais.', '#'],
  ['pessoa', 'Encarregado de dados', 'Canal para exercer seus direitos de titular.', '/contato'],
  ['conversa', 'Ouvidoria', 'Sugestões, elogios e reclamações sobre o atendimento.', '/contato'],
  ['predio', 'Justiça Aberta (CNJ)', 'Dados oficiais do cartório no sistema do CNJ.', 'https://www.cnj.jus.br/corregedoria/justica_aberta/'],
]

export function Cartorio() {
  return (
    <Layout
      titulo="O Cartório"
      texto="Serviço público delegado pelo Poder Judiciário do Paraná, com registro civil e tabelionato de notas em um só lugar."
    >
      <div className="metade">
        <div className="bloco">
          <p className="rotulo">Quem somos</p>
          <h2>Registro civil e notas para Foz do Jordão</h2>
          <div className="numeros">
            {numeros.map(([valor, texto]) => (
              <div key={texto}>
                <strong>{valor}</strong>
                <span>{texto}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bloco">
          <p>O Serviço Distrital de Foz do Jordão é o Ofício de Registro Civil das Pessoas Naturais e Tabelionato de Notas do município. Foi instalado em 3 de junho de 2004 e pertence à Comarca de Guarapuava.</p>
          <p>Como todo cartório, é um serviço público exercido por delegação do Poder Judiciário. A atividade é fiscalizada pela Corregedoria-Geral da Justiça do Paraná e os atos têm fé pública.</p>
          <div className="box">
            <Linhas itens={[
              ['Nome oficial', 'Ofício de Registro Civil e Tabelionato de Notas'],
              ['Comarca', 'Guarapuava, Paraná'],
              ['CNS', site.cns],
              ['CNPJ', site.cnpj],
            ]} />
          </div>
        </div>
      </div>

      <div className="bloco">
        <h2>Nossa equipe</h2>
        <div className="grade">
          {equipe.map(([sigla, nome, cargo, texto]) => (
            <div className="box escuro" key={nome}>
              <span className="icone iniciais">{sigla}</span>
              <h3>{nome}</h3>
              <p className="rotulo">{cargo}</p>
              <p>{texto}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bloco">
        <h2>Transparência e privacidade</h2>
        <div className="grade">
          {transparencia.map(([icone, titulo, texto, link]) => (
            <Ir className="box cartao" to={link} key={titulo}>
              <span className="icone quadrado"><Icone nome={icone} /></span>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </Ir>
          ))}
        </div>
      </div>
    </Layout>
  )
}
