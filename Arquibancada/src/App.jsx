import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* O Header fica fixo aqui para TODAS as rotas filhas */}
      <Header />

      <main style={{ padding: "2rem", color: "#fff" }}>
        {/* O Outlet é a "janela" onde as páginas filhas serão exibidas */}
        <Outlet />
      </main>

      <Footer destino="/Integrantes" nome="Integrantes" mostrar={true} />
    </>
  );
}

export default App;
