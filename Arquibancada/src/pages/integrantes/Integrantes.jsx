import CardIntegrantes from "../../components/CardIntegrantes";
import styled from "styled-components";
import fotoEvelyn from "../../assets/integrantes/evelyn.jpg";
import fotoGuilherme from "../../assets/integrantes/guilherme.jpg";
import fotoHian from "../../assets/integrantes/hian.jpg";
import fotoMatheus from "../../assets/integrantes/matheus.png";
import fotoKayann from "../../assets/integrantes/kayann.jpg";

const CardsContainer = styled.div`
  width: 100%;
  padding: 1rem 0 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 245px), 1fr));
  gap: 1rem;
`;

const Container = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 2.5rem 0;
`;

const Eyebrow = styled.p`
  margin: 0 0 0.5rem;
  color: #8ee6a0;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

const Titulo = styled.h1`
  margin: 0;
  color: #f4f7f3;
  font-size: clamp(2rem, 4vw, 3.2rem);
  letter-spacing: -0.055em;
`;

const Descricao = styled.p`
  margin: 0.5rem 0 1.25rem;
  color: #9eaca2;
`;

export default function Integrantes() {
  return (
    <Container>
      <Eyebrow>Quem somos</Eyebrow>
      <Titulo>Nosso time</Titulo>
      <Descricao>As pessoas por trás do projeto Arquibancada.</Descricao>
      <CardsContainer>
        {/* As props são: nome, descrição, urlGit, urlLinked, urlInsta (Para os links, o icone só vai ser habilitado se houver um link.) */}
        <CardIntegrantes
          nome="Evelyn Gregorio"
          imagem={fotoEvelyn}
          descricao="Desenvolvedora do projeto Arquibancada"
          urlGit="https://github.com/evelyncode0"
          urlLinked="https://www.linkedin.com/in/evelyn-gregorio-83a98b319/"
          urlInsta=""
        />
        <CardIntegrantes
          nome="Guilherme Hermes"
          imagem={fotoGuilherme}
          descricao="Desenvolvedor do projeto Arquibancada"
          urlGit="https://github.com/GuiHermes"
          urlLinked="https://www.linkedin.com/in/guihermes/"
          urlInsta="https://www.instagram.com/g.hermes14/"
        />
        <CardIntegrantes
          nome="Hian Oliveira"
          imagem={fotoHian}
          descricao="Desenvolvedor do projeto Arquibancada"
          urlGit="https://github.com/hian128"
          urlLinked="https://www.linkedin.com/in/hian-oliveira-5025313a0/"
          urlInsta="https://www.instagram.com/hian.oliveira.798/"
        />
        <CardIntegrantes
          nome="Matheus Rodrigues"
          imagem={fotoMatheus}
          descricao="Desenvolvedor do projeto Arquibancada"
          urlGit="https://github.com/Matheus-Rod03"
          urlLinked="https://www.linkedin.com/in/matheus-rodrigues-55b0b0436/"
          urlInsta=""
        />
        <CardIntegrantes
          nome="Kayann"
          imagem={fotoKayann}
          descricao="Desenvolvedor do projeto Arquibancada"
          urlGit="https://github.com/Sc00pex"
          urlLinked="https://www.linkedin.com/in/kayann-leandro-de-s%C3%A1/"
          urlInsta=""
        />
      </CardsContainer>
    </Container>
  );
}
