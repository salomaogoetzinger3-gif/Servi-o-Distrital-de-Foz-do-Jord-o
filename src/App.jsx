import { Address } from "./components/Address";
import { BoxNotary } from "./components/BoxNotary";
import { Hero } from "./components/Hero";
import { Cabecalho, Rodape } from "./components/Layout";
import { Informations } from "./components/Informations";
import { Notary } from "./components/Notary";
import { Questions } from "./components/Questions";
import { Servics } from "./components/Servics";

function App() {
  return (
    <>
      <div className="cabeca inicio">
        <Cabecalho />
        <Hero />
      </div>
      <Informations />
      <Servics />
      <BoxNotary />
      <Notary />
      <Questions />
      <Address />
      <Rodape />
    </>
  );
}

export default App;
