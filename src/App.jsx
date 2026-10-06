import "./App.css";
import { Address } from "./components/Address";
import { BoxNotary } from "./components/BoxNotary";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Informations } from "./components/Informations";
import { Notary } from "./components/Notary";
import { Questions } from "./components/Questions";
import { Servics } from "./components/Servics";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Informations />
      <Servics />
      <BoxNotary />
      <Notary />
      <Questions />
      <Address />
      <Footer />
    </>
  );
}

export default App;
