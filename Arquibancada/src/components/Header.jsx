import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ArrowRight, Search, Trophy } from "lucide-react";

const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1rem clamp(1rem, 4vw, 3.5rem);
  background: rgba(9, 18, 17, 0.92);
  border-bottom: 1px solid rgba(148, 163, 184, 0.14);
  backdrop-filter: blur(18px);

  @media (max-width: 850px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  color: #8ee6a0;
  font-size: 1.25rem;
  font-weight: 850;
  letter-spacing: -0.04em;
  text-decoration: none;
  white-space: nowrap;

  .logo-name { color: inherit; }
  .logo-name span { color: #f4f7f3; }
`;

const NavMenu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;

  a {
    padding: 0.62rem 0.85rem;
    border-radius: 999px;
    color: #a5b2aa;
    font-size: 0.9rem;
    font-weight: 650;
    text-decoration: none;
    transition: background 160ms ease, color 160ms ease;
  }

  a:hover, a.active { color: #eaffed; background: rgba(82, 190, 108, 0.13); }

  @media (max-width: 850px) { order: 3; width: 100%; }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  width: min(280px, 30vw);
  min-width: 190px;
  padding: 0.3rem 0.35rem 0.3rem 0.85rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.045);
  color: #91a199;

  input {
    width: 100%;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: #f4f7f3;
    font: inherit;
    font-size: 0.85rem;
  }

  input::placeholder { color: #829087; }
  &:focus-within { border-color: #70ce82; box-shadow: 0 0 0 3px rgba(112, 206, 130, 0.12); }

  button {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    flex: 0 0 auto;
    border: 0;
    border-radius: 50%;
    background: #72cf85;
    color: #102416;
    cursor: pointer;
  }

  @media (max-width: 850px) { width: auto; flex: 1; }
`;

export default function Header() {
  const [query, setQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    setQuery(location.pathname === "/times" ? params.get("busca") ?? "" : "");
  }, [location.pathname, location.search]);

  function pesquisar(event) {
    event.preventDefault();
    const termo = query.trim();
    navigate(termo ? `/times?busca=${encodeURIComponent(termo)}` : "/times");
  }

  return (
    <HeaderContainer>
      <Logo to="/">
        <Trophy size={25} strokeWidth={2.4} />
        <span className="logo-name">Arqui<span>Bancada</span></span>
      </Logo>
      <NavMenu aria-label="Navegação principal">
        <NavLink to="/" end>Início</NavLink>
        <NavLink to="/campeonatos">Brasileirão</NavLink>
        <NavLink to="/times">Equipes</NavLink>
        <NavLink to="/integrantes">Integrantes</NavLink>
      </NavMenu>
      <SearchForm role="search" onSubmit={pesquisar}>
        <Search size={17} aria-hidden="true" />
        <input
          aria-label="Buscar equipe"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar equipe..."
        />
        <button type="submit" aria-label="Pesquisar equipe"><ArrowRight size={17} /></button>
      </SearchForm>
    </HeaderContainer>
  );
}
