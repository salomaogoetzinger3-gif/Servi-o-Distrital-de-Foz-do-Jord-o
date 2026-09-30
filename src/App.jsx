import "./App.css";
import { Address } from "./components/Address";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Servics } from "./components/Servics";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Servics />
      <Address />
    </>
  );
}

export default App;
