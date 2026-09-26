import {
  FooterContainer,
  FooterContent,
  Description,
  Nav,
  NavLink,
  Copyright,
  Rota,
} from "./Footer.styles";

export default function pageFooter(props) {
  const mostrar = props.mostrar;
  return (
    <FooterContainer>
      <FooterContent>
        {mostrar && <NavLink href="#header">VOLTAR PARA O TOPO</NavLink>}
        <Copyright>
          &copy; {new Date().getFullYear()} Arquibancada.
          <br /> Todos os direitos ilusoriamente reservados.{" "}
        </Copyright>
        <Nav>
          {mostrar && (
            <>
              <NavLink href="#times">Times</NavLink>

              <NavLink href="#campeonatos">Campeonatos</NavLink>
            </>
          )}

          <Rota to={props.destino}>{props.nome}</Rota>
        </Nav>
      </FooterContent>
    </FooterContainer>
  );
}
