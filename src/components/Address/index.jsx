import "./address.style.css";

export function Address() {
  const endereco =
    "R. Prof. Parigot de Souza, 41 - Centro, Foz do Jordão - PR, 85145-000";
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
          <section className="mapa">
            <iframe
              title="Localização do Serviço Distrital de Foz do Jordão"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&z=17&output=embed`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
          <a
            className="button-map"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`}
            target="_blank"
            rel="noreferrer"
          >
            Abrir no Google Maps
          </a>
        </div>
      </section>
    </>
  );
}
