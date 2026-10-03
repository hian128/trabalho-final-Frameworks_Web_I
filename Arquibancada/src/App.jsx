import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import styled from "styled-components";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ConteudoPrincipal = styled.main`
  flex: 1;
  width: 100%;
  box-sizing: border-box;
  padding: 0 clamp(1rem, 4vw, 3.5rem);
  color: #f4f7f3;
`;

function App() {
  return (
    <AppContainer>
      {/* O Header fica fixo aqui para TODAS as rotas filhas */}
      <Header />

      <ConteudoPrincipal>
        {/* O Outlet é a "janela" onde as páginas filhas serão exibidas */}
        <Outlet />
      </ConteudoPrincipal>

      <Footer destino="/Integrantes" nome="Integrantes" />
    </AppContainer>
  );
}

export default App;
