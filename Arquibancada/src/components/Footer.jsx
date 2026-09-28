import {
  FooterContainer,
  FooterContent,
  Nav,
  Logo,
  Copyright,
  Rota,
} from "./Footer.styles";
import { Trophy } from "lucide-react";
export default function pageFooter(props) {
  const mostrar = props.mostrar;
  return (
    <FooterContainer>
      <FooterContent>
        <Logo to="/">
          <Trophy size={26} color="#00e676" />
          Arqui<span>Bancada</span>
        </Logo>
        <Copyright>
          &copy; {new Date().getFullYear()} Arquibancada.
          <br /> Todos os direitos ilusoriamente reservados.{" "}
        </Copyright>
        <Nav>
          {mostrar && (
            <>
              <Rota to="/campeonatos">Campeonatos</Rota>

              <Rota to="/times">Equipes</Rota>
            </>
          )}

          <Rota to="/integrantes">Integrantes</Rota>
        </Nav>
      </FooterContent>
    </FooterContainer>
  );
}
