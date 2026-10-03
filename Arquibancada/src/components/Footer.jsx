import { Trophy } from "lucide-react";

import { Link } from "react-router-dom";
import styled from "styled-components";

export const Rota = styled(Link)`
  display: inline-block;

  color: #f4f7f3;
  text-decoration: none;
  font-weight: 500;

  transition:
    color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    color: #8ee6a0;
    transform: translateY(-4px);
  }
`;

export const FooterContainer = styled.footer`
  width: 100%;
  background: #0b1210;
  color: #f4f7f3;
  padding: 40px 20px 20px;
  border-top: 1px solid rgba(142, 230, 160, 0.18);
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  font-weight: 800;
  color: #8ee6a0;
  text-decoration: none;
  letter-spacing: 0.5px;

  .logo-name {
    color: #8ee6a0;
  }

  .logo-name span {
    color: #f4f7f3;
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 25px;

  @media (max-width: 435px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Copyright = styled.p`
  margin: 30px 0 0;
  padding-top: 20px;

  border-top: 1px solid rgba(148, 163, 184, 0.14);

  color: #a5b2aa;
  font-size: 13px;
  text-align: center;
`;

export default function pageFooter(props) {
  const mostrar = props.mostrar;
  return (
    <FooterContainer>
      <FooterContent>
        <Logo to="/">
          <Trophy size={26} color="#00e676" />
          <span className="logo-name">
            Arqui<span>Bancada</span>
          </span>
        </Logo>
        <Copyright>
          &copy; {new Date().getFullYear()} Arquibancada.
          <br /> Todos os direitos reservados.
        </Copyright>
        <Nav>
          {mostrar && (
            <>
              <Rota to="/campeonatos">Campeonatos</Rota>

              <Rota to="/times">Equipes</Rota>
            </>
          )}

          <Rota to="/integrantes">Entre em contato conosco!</Rota>
        </Nav>
      </FooterContent>
    </FooterContainer>
  );
}
