import CardIntegrantes from "../components/CardIntegrantes";
import Footer from "../components/Footer";
import styled from "styled-components";

const CardsContainer = styled.div`
  width: 100%;
  padding: 40px 20px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 30px;

  @media (max-width: 1400px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export default function Integrantes() {
  return (
    <div>
      <h1>Integrantes</h1>
      <CardsContainer>
        {/* As props são: nome, descrição, urlGit, urlLinked, urlInsta (Para os links, o icone só vai ser habilitado se houver um link.) */}
        <CardIntegrantes
          nome="Evelyn Gregorio"
          imagem="https://placehold.co/400x250"
          descricao="Texto generico"
          mostrar={true}
          urlGit=""
          urlLinked=""
          urlInsta=""
        />
        <CardIntegrantes
          nome="Guilherme Hermes"
          imagem="https://placehold.co/400x250"
          descricao="Texto generico"
          mostrar={true}
          urlGit="https://github.com/GuiHermes"
          urlLinked=""
          urlInsta=""
        />
        <CardIntegrantes
          nome="Hian Oliveira"
          imagem="https://placehold.co/400x250"
          descricao="Texto generico"
          mostrar={true}
          urlGit=""
          urlLinked=""
          urlInsta=""
        />
        <CardIntegrantes
          nome="Matheus Rodrigues"
          imagem="https://placehold.co/400x250"
          descricao="Texto generico"
          mostrar={true}
          urlGit=""
          urlLinked=""
          urlInsta=""
        />
        <CardIntegrantes
          nome="Kayan"
          imagem="https://placehold.co/400x250"
          descricao="Texto generico"
          mostrar={false}
          urlGit=""
          urlLinked=""
          urlInsta=""
        />
      </CardsContainer>

      {/* <Footer destino="/" nome="Home" mostrar={true} /> */}
    </div>
  );
}
