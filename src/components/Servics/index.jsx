import "./servics.style.css";

export function Servics() {
  return (
    <>
      <div className="text-servics">
        <h4 className="text-servics-subtitulo">Nossos</h4>
        <h1 className="text-servics-titulo">Serviços</h1>
      </div>
      <ul className="grid-servics">
        <li className="list-servics">
          <a className="servics" href="#">
            <img width={70} src="/Icon field.png" alt="" /> NASCIMENTO
            <p className="paragraf-servics">
              registro de nascimento e emissão de certidões
            </p>
          </a>
        </li>
        <li className="list-servics">
          <a className="servics" href="#">
            <img width={70} src="/Icon field-1.png" alt="" /> CASAMENTO
            <p className="paragraf-servics">
              habilitação, celebração e registro de casamento
            </p>
          </a>
        </li>
        <li className="list-servics">
          <a className="servics" href="#">
            <img width={70} src="/Icon field-2.png" alt="" /> ÓBITOS
            <p className="paragraf-servics">
              registro de óbitos e emissão de certidões
            </p>
          </a>
        </li>
        <li className="list-servics">
          <a className="servics" href="#">
            <img width={70} src="/Icon field-3.png" alt="" /> IDENTIDADE CIVIL
            <p className="paragraf-servics">Emissão de 2ª via e atualizações</p>
          </a>
        </li>
        <li className="list-servics">
          <a className="servics" href="#">
            <img width={70} src="/Icon field-4.png" alt="" /> PROCURAÇÕES
            <p className="paragraf-servics">
              Lavraturas de escrituras e procurações
            </p>
          </a>
        </li>
        <li className="list-servics">
          <a className="servics" href="#">
            <img width={70} src="/Icon field-5.png" alt="" /> ESCRITURAS
            <p className="paragraf-servics">
              Compra e venda, doação, união estável e outras
            </p>
          </a>
        </li>
        <li className="list-servics">
          <a className="servics" href="#">
            <img width={70} src="/Icon field-6.png" alt="" /> REGISTROS EM GERAL
            <p className="paragraf-servics">
              Averbações, retificações e demais atos registrais
            </p>
          </a>
        </li>
        <li className="list-servics">
          <a className="servics" href="#">
            <img width={70} src="/Icon field-7.png" alt="" /> ATENDIMENTO
            PERSONALIZADO
            <p className="paragraf-servics">
              equipe preparada para orientar e facilitar o seu processo
            </p>
          </a>
        </li>
      </ul>
    </>
  );
}
