import "./address.style.css";

export function Address() {
  return (
    <>
      <section className="address">
        <div className="address-text">
          <h4 className="address-info">SOBRE NÓS</h4>
          <h1 className="address-titulo">
            Tradição e Cidadania em um só lugar
          </h1>
          <hr className="hr" />
          <p className="address-paragrafo">
            O serviço Distrital de Foz do Jordão é referencia em atendimento de
            tabelhonato e Registro Cívil, garantindo segurança jurídica e
            praticidade para a população. Trabalhamos com ética, transparência e
            compromisso com o seu bem mais valioso: sua hisória.
          </p>
        </div>
      </section>
      <section className="address-info-1">
        <ul className="address-info-lista">
          <li className="address-info-item">
            <h4 className="address-info-texto1">Endereço</h4>
            <h2 className="address-info-texto2">Rua Parigot de Souza, 44</h2>
          </li>
          <li className="address-info-item">
            <h4 className="address-info-texto1">Telefone</h4>
            <h2 className="address-info-texto2">+55 (47) 99992-7505</h2>
          </li>
          <li className="address-info-item">
            <h4 className="address-info-texto1">E-MAIL</h4>
            <h2 className="address-info-texto2">
              servicodistritalfozdojordao@registrocivil.org.br
            </h2>
          </li>
          <li className="address-info-item">
            <h4 className="address-info-texto1">Horário de Atendimento</h4>
            <h2 className="address-info-texto2">
              Segunda á Sexta
              <br />
              08:30 às 11:15
              <br />
              13:00 às 17:00
            </h2>
          </li>
        </ul>
      </section>
    </>
  );
}
