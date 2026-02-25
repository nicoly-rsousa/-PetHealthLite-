import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/menu";
import Home from "./pages/home";
import Pacientes from "./pages/pacientes";
import Consultas from "./pages/consultas";
import Listagem from "./pages/listagem";

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/consultas" element={<Consultas />} />
        <Route path="/listagem" element={<Listagem />} />
      </Routes>
    </HashRouter>
  );
}