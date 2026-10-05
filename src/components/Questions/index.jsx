import "./questions.style.css";

export function Questions() {
  return (
    <>
      <section className="questions">
        <div className="questions-text-left">
          <h1 className="questions-text-left-h4">Duvidas frequentes</h1>
          <h1 className="questions-text-left-h1">
            Perguntas que mais recebemos
          </h1>
          <p>
            Não encontrou sua dúvida? ligue para (42) 99806-7505 no horario de
            atendimento
          </p>
        </div>
        <div className="questions-cards-right">
          <ul className="question-list">
            <li className="question-item">
              <input type="checkbox" name="acordeon" id="primeira" />
              <label className="question-label" htmlFor="primeira">
                Quanto custa registrar um nascimento?
              </label>

              <p className="response">
                Nada. O registro de nascimento e a primeira certidão são
                gratuitos para todos, por lei. Leve a Declaração de Nascido Vivo
                (DNV) entregue pelo hospital e o documento com foto dos pais. Se
                os pais forem casados, um deles pode ir sozinho com a certidão
                de casamento. Se não forem casados, o pai precisa comparecer
                para constar no registro. <br />{" "}
                <strong>
                  O prazo é de 15 dias após o nascimento e pode chegar a três
                  meses para quem mora a mais de 30 km do cartório.
                </strong>
              </p>
            </li>
            <li className="question-item">
              <input type="checkbox" name="acordeon" id="segunda" />
              <label className="question-label" htmlFor="segunda">
                Posso fazer divórcio ou inventário direto no cartório?
              </label>

              <p className="response">
                Sim, quando há acordo entre todos os envolvidos. É obrigatório
                estar acompanhado de advogado ou defensor público. <br /> Desde
                2024, o divórcio em cartório também é possível com filhos
                menores, desde que guarda, visitas e pensão alimentícia já
                tenham sido resolvidos na Justiça antes. <br /> No inventário,
                quando há herdeiro menor ou incapaz, ele precisa receber a sua
                parte ideal de cada bem. <br /> Você pode escolher em qual
                cartório fazer, independentemente de onde moram as partes ou de
                onde estão os bens.
              </p>
            </li>
            <li className="question-item">
              <input type="checkbox" name="acordeon" id="terceira" />
              <label className="question-label" htmlFor="terceira">
                Preciso ir pessoalmente para fazer uma procuração?
              </label>

              <p className="response">
                Quem dá os poderes, o outorgante, precisa estar presente com RG
                e CPF originais. Quem vai receber os poderes, o procurador, não
                precisa comparecer, basta levar os dados completos dele. <br />{" "}
                Também é possível fazer a procuração online, por
                videoconferência, pela plataforma e-Notariado, com certificado
                digital gratuito.
              </p>
            </li>
            <li className="question-item">
              <input type="checkbox" name="acordeon" id="quarta" />
              <label className="question-label" htmlFor="quarta">
                Quais documentos levar para casar no civil?
              </label>

              <div className="response">
                Cada noivo leva:
                <ul>
                  <li style={{ listStyle: "inside" }}>
                    RG, CPF e comprovante de residência;
                  </li>
                  <li style={{ listStyle: "inside" }}>
                    Certidão de nascimento, se for solteiro;
                  </li>
                  <li style={{ listStyle: "inside" }}>
                    certidão de casamento com a averbação do divórcio, se for
                    divorciado;
                  </li>
                  <li style={{ listStyle: "inside" }}>
                    certidão de casamento e certidão de óbito do cônjuge, se for
                    viúvo.
                  </li>
                </ul>
                Também são necessárias duas testemunhas maiores de 18 anos, com
                documento. Elas podem ser parentes. Noivos com 16 ou 17 anos
                precisam da autorização dos pais. <br />{" "}
                <strong>
                  Depois da entrega dos documentos, o cartório publica os
                  proclamas, e a habilitação vale por 90 dias para a celebração
                </strong>
              </div>
            </li>
            <li className="question-item">
              <input type="checkbox" name="acordeon" id="quinta" />
              <label className="question-label" htmlFor="quinta">
                Como sei o valor de cada serviço?
              </label>
              <p className="response">
                Os valores são definidos por lei estadual e seguem a tabela de
                custas do Tribunal de Justiça do Paraná, a mesma para todos os
                cartórios do estado. <br />{" "}
                <strong>
                  Ao valor do ato somam-se os fundos e taxas previstos em lei, e
                  todos vêm discriminados no recibo. Para saber o valor exato do
                  seu caso, ligue para (42) 99806-7505 ou peça um orçamento por
                  e-mail.
                </strong>
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
