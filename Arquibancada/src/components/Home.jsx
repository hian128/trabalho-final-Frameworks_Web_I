import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Titulo = styled.h1`
  color: #334155;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Subtitulo = styled.h3`
  color: #334155;
  font-weight: bold;
`;

function Home() {
  return (
    <HomeContainer>
      <Titulo>O futebol brasileiro em um só lugar</Titulo>
      <Subtitulo>
        Acompanhe o Brasileirão, veja partidas ao vivo e conheça as equipes.
      </Subtitulo>
    </HomeContainer>
  );
}

export default Home;
