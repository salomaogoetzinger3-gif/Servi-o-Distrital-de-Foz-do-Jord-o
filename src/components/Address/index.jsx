import { useState } from "react";
import "./address.style.css";

export function Address() {
  const [copiado, setCopiado] = useState(false);
  const enderecoExibido =
    "Rua Gov. Prof Parigot de Souza, 44, Centro, Foz do Jordão, PR, 85145-000";
  const copiarEndereco = async () => {
    try {
      await navigator.clipboard.writeText(enderecoExibido);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch {
      setCopiado(false);
    }
  };
  const endereco =
    "R. Prof. Parigot de Souza, 41 - Centro, Foz do Jordão - PR, 85145-000";
  return (
    <>
      <section className="address">
        <section className="mapa">
          <iframe
            title="Localização do Serviço Distrital de Foz do Jordão"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&z=17&output=embed`}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
        <div className="address-info">
          <h1>Venha até o cartório</h1>
          <ul className="address-info-list">
            <li>
              <p>Endereço</p>{" "}
              <h4>
                Rua Gov. Prof Parigot de Souza, 44, Centro, Foz do Jordão, PR,
                85145-000
              </h4>{" "}
            </li>
            <li>
              <p>Telefone</p> <h4>(42) 99806-7505</h4>
            </li>
            <li>
              <p>E-mail</p> <h4>cartoriofozdojordao@hotmail.com</h4>
            </li>
            <li>
              <p>Segunda a sexta</p> <h4>8:30 às 11:30 e 13h às 17h</h4>
            </li>
            <li>
              <p>Sábado e domingo</p> <h4>Fechado</h4>
            </li>
          </ul>
          <div className="address-buttons">
            <a
              className="button-map"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`}
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Mapa
            </a>
            <button
              type="button"
              className="button-copy"
              onClick={copiarEndereco}
            >
              {copiado ? "Endereço copiado!" : "Copiar endereço"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
