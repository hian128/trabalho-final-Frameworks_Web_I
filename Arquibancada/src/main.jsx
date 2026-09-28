import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Live from "./pages/live/Live";
import Times from "./pages/times/Times";
import Integrantes from "./pages/integrantes/Integrantes";
import Home from "./components/Home";
import Campeonatos from "./pages/campeonatos/Campeonatos";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Rota PAI: App carrega o Header */}
        <Route path="/" element={<App />}>
          {/* Rotas FILHAS: desenhadas no lugar do <Outlet /> */}
          <Route index element={<Home />} />
          <Route path="campeonatos" element={<Campeonatos />} />
          <Route path="live" element={<Live />} />
          <Route path="times" element={<Times />} />
          <Route path="integrantes" element={<Integrantes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
