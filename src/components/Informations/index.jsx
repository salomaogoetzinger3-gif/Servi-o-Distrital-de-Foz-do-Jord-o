import "./informations.style.css";

const agora = new Date();

agora.getHours();
agora.getMinutes();
agora.getSeconds();
agora.getDay();

agora.toLocaleTimeString("pt-BR");
agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

function estaAberto() {
  const agora = new Date();
  const dia = agora.getDay();
  const hora = agora.getHours();

  const diaUtil = dia >= 1 && dia <= 5; //segunda a sexta
  const horarioComercial = hora >= 8 && hora < 17; //horas

  return diaUtil && horarioComercial;
}

export function Informations() {
  return (
    <section className="informations">
      <div>
        <i className="fa-regular fa-clock" />
        <div className="informations-text">
          <h3>
            {estaAberto() ? "Aberto agora" : "Fechado no momento"}, até as
            17h{" "}
          </h3>
          <p>Rua. Gov. prof parigot de souza, 44 </p>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-id-card" />
        <div className="informations-text">
          <h3>Traga RG ou CNH e CPF</h3> <p>Documentos originais, com foto!</p>
          <strong>Não é permitido foto do celular</strong>
        </div>
      </div>
      <div>
        <i className="fa-solid fa-shield" />
        <div className="informations-text">
          <h3>CNS 08.330-3</h3> <p>Cartório oficial, desde 2004</p>
        </div>
      </div>
    </section>
  );
}
