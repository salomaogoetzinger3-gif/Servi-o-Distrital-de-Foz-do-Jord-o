import { Layout } from '../../components/Layout'
import { Aceite, Campo, Icone } from '../../components/Ui'
import { enviarPorEmail, site } from '../../data/site'

const cartoes = [
  ['telefone', 'Telefone', <a href={site.tel}>{site.telefone}</a>, 'No horário de atendimento'],
  ['email', 'E-mail', <a href={`mailto:${site.email}`}>{site.email}</a>, 'Respondemos em dias úteis'],
  ['local', 'Endereço', site.rua, `${site.bairro}, ${site.cidade}`],
  ['relogio', 'Horário', 'Seg. a sex.', site.horario],
]

const assuntos = ['Certidão', 'Casamento', 'Procuração', 'Escritura', 'Orçamento', 'Outro']

export function Contato() {
  return (
    <Layout
      titulo="Fale com o cartório"
      trilha={['Contato']}
      texto="Telefone, e-mail, endereço e horários. Se preferir, deixe sua mensagem e retornamos em dias úteis."
    >
      <div className="grade">
        {cartoes.map(([icone, rotulo, valor, sub]) => (
          <div className="box cartao" key={rotulo}>
            <span className="icone"><Icone nome={icone} /></span>
            <p className="rotulo cinza">{rotulo}</p>
            <strong>{valor}</strong>
            <p>{sub}</p>
          </div>
        ))}
      </div>

      <div className="metade">
        <form className="box form" onSubmit={(e) => enviarPorEmail(e, 'Mensagem pelo site')}>
          <h2>Envie sua mensagem</h2>
          <p>Tire dúvidas, peça orçamento ou agende um atendimento.</p>
          <Campo rotulo="Nome completo">
            <input name="Nome" placeholder="Seu nome" required />
          </Campo>
          <div className="par">
            <Campo rotulo="Telefone ou WhatsApp">
              <input name="Telefone" type="tel" placeholder="(42) 00000-0000" required />
            </Campo>
            <Campo rotulo="E-mail">
              <input name="E-mail" type="email" placeholder="seuemail@exemplo.com" />
            </Campo>
          </div>
          <Campo rotulo="Assunto" dica="Certidão, casamento, procuração, escritura, orçamento ou outro">
            <select name="Assunto" defaultValue="" required>
              <option value="" disabled>Escolha um assunto</option>
              {assuntos.map((a) => <option key={a}>{a}</option>)}
            </select>
          </Campo>
          <Campo rotulo="Mensagem">
            <textarea name="Mensagem" placeholder="Conte o que você precisa" required />
          </Campo>
          <Aceite>Autorizo o uso dos meus dados para responder esta mensagem, conforme a LGPD.</Aceite>
          <button className="btn" type="submit">Enviar mensagem</button>
        </form>

        <div className="mapa-box">
          <iframe
            title="Mapa do cartório"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(site.mapa)}&z=17&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="mapa-cartao">
            <div>
              <strong>{site.rua}, {site.bairro}</strong>
              <p>{site.cidade}, {site.cep}</p>
            </div>
            <a
              className="btn"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.mapa)}`}
              target="_blank"
              rel="noreferrer"
            >
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
