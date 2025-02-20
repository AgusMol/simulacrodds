import "./App.css";
import { Menu } from "./components/Menu";
import { Inicio } from "./components/Inicio";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Consultar from "./components/consultar";

function App() {
  return (
    <BrowserRouter>
    <div>
        <Menu />
        <div className="divBody">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/consultar" element={<Consultar />} />
            <Route path="/inicio" element={<Inicio />} />
          </Routes>
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
