import styled from "styled-components";

export const CardContainer = styled.div`
  width: 100%;
  min-width: 0;
  background: linear-gradient(145deg, #15221b, #111a16);
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 20px;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;

  transition:
    transform 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: rgba(142, 230, 160, 0.6);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.2);
  }
`;

export const Escudo = styled.img`
  width: 96px;
  height: 96px;

  object-fit: contain;

  margin-bottom: 1rem;
  padding: 0.35rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.04);
`;

export const Informacoes = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Nome = styled.h2`
  margin: 0;

  color: #f4f7f3;
  font-size: 1.1rem;
  font-weight: 700;
`;

export const Serie = styled.p`
  margin: 0;

  color: #9eaca2;
  font-size: 14px;
`;

export const LinkClube = styled.a`
  margin-top: 10px;

  color: #8ee6a0;
  text-decoration: none;
  font-weight: 600;

  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: #ffffff;
    transform: translateX(4px);
  }
`;

export default function CardClube({ clube }) {
  return (
    <CardContainer>
      <Escudo src={clube.escudo} alt={`Escudo do ${clube.nome}`} />

      <Informacoes>
        <Nome>{clube.nome}</Nome>
        <Serie>{clube.serie}</Serie>
        {clube.link && (
          <LinkClube href={clube.link} target="_blank" rel="noreferrer">
            Página do clube →
          </LinkClube>
        )}
      </Informacoes>
    </CardContainer>
  );
}
