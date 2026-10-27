import "./servics.style.css";

const registroCivil = [
  ["Registro de nascimento", "Gratuito, com a 1ª certidão", "registro-de-nascimento"],
  ["Habilitação e casamento civil", "Documentos, proclamas e celebração", "habilitacao-e-casamento"],
  ["Registro de óbito", "Orientação para a família", "registro-de-obito"],
  ["Reconhecimento de paternidade", "Direto no cartório, sem processo", "reconhecimento-de-paternidade"],
  ["Averbação e retificações", "Divórcio, mudança de nome e correções", "averbacao-e-retificacoes"],
  ["Certidão e 2ª via", "Nascimento, casamento e óbito", "certidao-e-2-via"],
  ["Interdições e tutelas", "Registro de decisões judiciais", "interdicoes-e-tutelas"],
];

const tabelionato = [
  ["Reconhecimento de firma e autenticação", "Na hora, com documento original", "firma-e-autenticacao"],
  ["Procurações e substabelecimentos", "Para bancos, INSS, imóveis e veículos", "procuracoes"],
  ["Compra e venda e doação", "Escrituras de imóveis e outros bens", "compra-venda-e-doacao"],
  ["União estável e pacto antenupcial", "Declaração e regime de bens do casal", "uniao-estavel-e-pacto"],
  ["Divórcio e inventário em cartório", "Quando há acordo, com advogado", "divorcio-e-inventario"],
  ["Ata notarial", "Prova de fatos, conversas e sites", "ata-notarial"],
  ["Emancipação", "Para maiores de 16 anos, com os pais", "emancipacao"],
];

function Lista({ itens }) {
  return (
    <ul className="servics-list">
      {itens.map(([titulo, texto, slug]) => (
        <li className="servics-item" key={slug}>
          <a
            href={`/servicos/${slug}`}
            className="servics-a"
            target="_blank"
            rel="noopener"
            aria-label={`${titulo}: abrir a ficha em uma nova guia`}
          >
            <h3>{titulo}</h3>
            <p>{texto}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Servics() {
  return (
    <>
      <div className="text-servics" id="servicos">
        <h1 className="text-servics-titulo">
          Encontre o serviço que você precisa
        </h1>
      </div>
      <section className="servics">
        <div className="servics-left">
          <div className="servics-components">
            <img src="./registro-civil-pessoas.png" alt="" />
            <div>
              <h2>Registro civil</h2>
              <p>Os registros da vida de cada pessoa</p>
            </div>
          </div>
          <Lista itens={registroCivil} />
        </div>
        <div className="servics-right">
          <div className="servics-components">
            <img src="./tabelionato-notas.png" alt="" />
            <div>
              <h2 className="servics-right-h2">Tabelionato de notas</h2>
              <p>Documentos com fé pública para negócios e acordos</p>
            </div>
          </div>
          <Lista itens={tabelionato} />
        </div>
      </section>
    </>
  );
}
