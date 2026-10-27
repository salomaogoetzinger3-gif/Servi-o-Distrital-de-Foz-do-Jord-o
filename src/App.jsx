import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Address } from "./components/Address";
import { BoxNotary } from "./components/BoxNotary";
import { Hero } from "./components/Hero";
import { Cabecalho, Rodape } from "./components/Layout";
import { Informations } from "./components/Informations";
import { Notary } from "./components/Notary";
import { Questions } from "./components/Questions";
import { Servics } from "./components/Servics";

function App() {
  const { hash, key } = useLocation();

  // Links como "/#servicos" (menu e fichas) rolam até a seção, mesmo vindo de outra página.
  useEffect(() => {
    const secao = hash && document.querySelector(hash);
    if (secao) secao.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, key]);

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
