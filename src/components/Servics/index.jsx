import "./servics.style.css";

export function Servics() {
  return (
    <>
      <div className="text-servics">
        <h1 className="text-servics-titulo">
          Encontre o serviço que você precisa
        </h1>
      </div>
      <section className="servics">
        <div className="servics-left">
          <div className="servics-components">
            <img src="src/assets/registro-civil-pessoas.svg" alt="" />
            <div>
              <h2>Registro civil</h2>
              <p>Os registros da vida de cada pessoa</p>
            </div>
          </div>
          <ul className="servics-list">
            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Registro de nascimento</h3>
                <p>Gratuito, com a 1ª certidão</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Habilitação e casamento civil</h3>
                <p>Documentos, proclamas e celebração</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Registro de óbito</h3>
                <p>Orientação para a familía</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Reconhecimento de paternidade</h3>
                <p>Direto no cartório, sem processo</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Averbação e retificações</h3>
                <p>Divórcio, mudança de nome e correçõoes</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Certidão e 2ª via</h3>
                <p>Nascimento, casamento e óbito</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Interdições e tutelas</h3>
                <p>Registro de decisões judiciais</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="servics-right">
          <div className="servics-components">
            <img src="src/assets/tabelionato-notas.svg" alt="" />
            <div>
              <h2 className="servics-right-h2">Tabelionato de notas</h2>
              <p>Documentos com fé pública para negócios e acordos</p>
            </div>
          </div>
          <ul className="servics-list">
            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Reconhecimento de firma e autenticação</h3>
                <p>Na hora, com documento original</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Procurações e substabelecimentos</h3>
                <p>Para bancos, INSS, imóveis e veículos</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Compra e venda e doação</h3>
                <p>Escrituras de imóveis e outros bens</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>União estável e pacto antenupcial</h3>
                <p>Declaração e regime de bens do casal</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Divórcio e inventário em cartório</h3>
                <p>Quando há acordo, com advogado</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Ata notorial</h3>
                <p>Prova de fatos, conversas e sites</p>
              </a>
            </li>

            <li className="servics-item">
              <a href="#" className="servics-a">
                <h3>Emancipação</h3>
                <p>Para maiores de 16 anos, com os pais</p>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
