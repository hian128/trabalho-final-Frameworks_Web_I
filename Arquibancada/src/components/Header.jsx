import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { Trophy, Search, Activity } from "lucide-react";

// Contentor principal do Header
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #121824; /* Fundo escuro tom desportivo */
  border-bottom: 2px solid #1f293d;
  color: #ffffff;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

// Logótipo com ícone e texto
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 800;
  color: #00e676; /* Verde relva */
  text-decoration: none;
  letter-spacing: 0.5px;

  span {
    color: #ffffff;
  }

  &:hover {
    opacity: 0.9;
  }
`;

// Menu de navegação (Links)
const NavMenu = styled.nav`
  display: flex;
  gap: 1.5rem;
  align-items: center;

  a {
    color: #94a3b8;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.4rem;
    transition: color 0.2s ease;

    &:hover,
    &.active {
      color: #00e676;
    }
  }
`;

// Badge (Etiqueta) para indicar "Ao Vivo"
const LiveBadge = styled.span`
  background-color: #ef4444;
  color: white;
  font-size: 0.65rem;
  padding: 0.15rem 0.4rem;
  border-radius: 4px;
  font-weight: 700;
  text-transform: uppercase;
  animation: pulse 1.5s infinite;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

// Campo de Busca
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #1e293b;
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  border: 1px solid #334155;
  gap: 0.5rem;

  input {
    background: transparent;
    border: none;
    outline: none;
    color: #ffffff;
    font-size: 0.85rem;
    width: 160px;

    &::placeholder {
      color: #64748b;
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      {/* 1. Logótipo */}
      <Logo to="/">
        <Trophy size={26} color="#00e676" />
        Arqui<span>Bancada</span>
      </Logo>

      {/* 2. Menu de Navegação */}
      <NavMenu>
        <NavLink to="/campeonatos">
          Campeonatos
        </NavLink>

        <NavLink to="/live">
          <Activity size={18} />
          Ao Vivo
          <LiveBadge>LIVE</LiveBadge>
        </NavLink>

        <NavLink to="/times">Equipes</NavLink>
      </NavMenu>

      {/* 3. Barra de Pesquisa */}
      <SearchContainer>
        <Search size={16} color="#64748b" />
        <input type="text" placeholder="Buscar equipe ou jogo..." />
      </SearchContainer>
    </HeaderContainer>
  );
}

export default Header;
