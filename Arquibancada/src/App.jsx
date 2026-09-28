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
  padding: 2rem;
  color: #fff;
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
