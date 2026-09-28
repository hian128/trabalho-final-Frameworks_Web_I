import React from "react";
import styled from "styled-components";
import CardClube from "../../components/CardClube";

const TimesContainer = styled.div`
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Titulo = styled.h1`
  color: #38bdf8;
  font-weight: bold;
  font-style: italic;
`;

function Times() {
  return (
    <TimesContainer>
      <CardClube/>
    </TimesContainer>
  );
}

export default Times;
