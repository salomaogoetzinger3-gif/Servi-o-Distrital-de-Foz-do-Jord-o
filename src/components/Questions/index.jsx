import "./questions.style.css";

export function Questions() {
  return (
    <>
      <section className="questions">
        <div className="questions-text-left">
          <h1 className="questions-text-left-h1">Duvidas frequentes</h1>
          <p>
            Encontre respostas para as principais dúvidas sobre nossos serviços,
            documentos e procedimentos. Reunimos as informações mais importantes
            para facilitar seu atendimento e ajudar você a saber o que é
            necessário antes de comparecer ao Serviço Distrital.
          </p>
          <input
            className="question-text-left-input"
            type="text"
            placeholder="Pesquisar..."
          />
          <h2>Fale conosco</h2>
        </div>
        <div className="questions-cards-right">
          <ul className="question-list">
            <li className="question-item">
              <input type="checkbox" name="acordeon" id="primeira" />
              <label className="question-label" htmlFor="primeira">
                Quais documentos preciso apresentar?
              </label>

              <p className="response">
                Para cada serviço, os documentos necessários podem variar.
                Recomendamos entrar em contato com o Serviço Distrital antes do
                atendimento para confirmar a documentação exigida para o seu
                caso.
              </p>
            </li>
            <li className="question-item">
              <input type="checkbox" name="acordeon" id="segunda" />
              <label className="question-label" htmlFor="segunda">
                Como solicitar uma segunda via?
              </label>

              <p className="response">
                A segunda via de certidões pode ser solicitada diretamente no
                Serviço Distrital. Para facilitar o atendimento, tenha em mãos
                seus dados pessoais e, se possível, informações sobre o registro
                original, como data e local.
              </p>
            </li>
            <li className="question-item">
              <input type="checkbox" name="acordeon" id="terceira" />
              <label className="question-label" htmlFor="terceira">
                É possível agendar atendimento?
              </label>

              <p className="response">
                Sim. O atendimento pode ser agendado conforme a disponibilidade
                do Serviço Distrital. Entre em contato pelos canais disponíveis
                para consultar horários e verificar a necessidade de
                agendamento.
              </p>
            </li>
            <li className="question-item">
              <input type="checkbox" name="acordeon" id="quarta" />
              <label className="question-label" htmlFor="quarta">
                Quais serviços são realizados pelo cartório?
              </label>

              <p className="response">
                O Serviço Distrital realiza diversos serviços de Tabelionato e
                Registro Civil, incluindo registros de nascimento, casamento e
                óbito, emissão de certidões, procurações, escrituras,
                averbações, retificações e outros atos registrais.
              </p>
            </li>
            <li className="question-item">
              <input type="checkbox" name="acordeon" id="quinta" />
              <label className="question-label" htmlFor="quinta">
                Qual o horário de atendimento?
              </label>
              <p className="response">
                O atendimento é realizado de segunda a sexta-feira, das 8h às
                17h. Para informações sobre serviços específicos ou horários
                diferenciados, entre em contato previamente com o Serviço
                Distrital.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
