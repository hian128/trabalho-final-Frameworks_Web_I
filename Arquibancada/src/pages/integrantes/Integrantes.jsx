import CardIntegrantes from "../../components/CardIntegrantes";
import styled from "styled-components";

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
          imagem="https://media.licdn.com/dms/image/v2/D4D03AQGkk4cKByeVlA/profile-displayphoto-crop_800_800/B4DZyXHtHwJIAI-/0/1772061908678?e=1792627200&v=beta&t=c9lYGe_k6HpP-p8thq6iyde1rkoZ-AE14RWe6TH5YwY"
          descricao="Desenvolvedor do projeto Arquibancada"
          urlGit="https://github.com/evelyncode0"
          urlLinked="https://www.linkedin.com/in/evelyn-gregorio-83a98b319/"
          urlInsta=""
        />
        <CardIntegrantes
          nome="Guilherme Hermes"
          imagem="https://media.licdn.com/dms/image/v2/D4D03AQGwD4aU4WHSNQ/profile-displayphoto-scale_200_200/B4DaBFu4pkKQAc-/0/1787876316596?e=1792627200&v=beta&t=gRczJldJhojnhxrt9Lo3Nu0Zyo7ilz1_itklmg0KWeg"
          descricao="Desenvolvedor do projeto Arquibancada"
          urlGit="https://github.com/GuiHermes"
          urlLinked="https://www.linkedin.com/in/guihermes/"
          urlInsta="https://www.instagram.com/g.hermes14/"
        />
        <CardIntegrantes
          nome="Hian Oliveira"
          imagem="https://media.licdn.com/dms/image/v2/D4E03AQH3INkxUUb1qg/profile-displayphoto-crop_800_800/B4EZu0xGH4KsAI-/0/1768264328353?e=1792627200&v=beta&t=LKSjIAPYWQNa7zOWvOjqJJWs2szDbXDeY2GOVRNm3Ng"
          descricao="Desenvolvedor do projeto Arquibancada"
          urlGit="https://github.com/hian128"
          urlLinked="https://www.linkedin.com/in/hian-oliveira-5025313a0/"
          urlInsta="https://www.instagram.com/hian.oliveira.798/"
        />
        <CardIntegrantes
          nome="Matheus Rodrigues"
          imagem="https://media.licdn.com/dms/image/v2/D5603AQHTvY18Iwa7tg/profile-displayphoto-crop_800_800/B56aCNuk3FGsAI-/0/1789084193396?e=1792627200&v=beta&t=JEguaE6kMppparg5VyRmqbhShvvhN_cZnBA-uUfGUpg"
          descricao="Desenvolvedor do projeto Arquibancada"
          urlGit="https://github.com/Matheus-Rod03"
          urlLinked="https://www.linkedin.com/in/matheus-rodrigues-55b0b0436/"
          urlInsta=""
        />
        <CardIntegrantes
          nome="Kayann"
          imagem="https://media.licdn.com/dms/image/v2/D5603AQGD7c9dtYZzZg/profile-displayphoto-crop_800_800/B56ZnYvHQZJ8AI-/0/1760277858827?e=1792627200&v=beta&t=C5yK4Kfr6vrXsyrAaMAOVClKQy6oskkBi0F4gtfVQyw"
          descricao="Desenvolvedor do projeto Arquibancada"
          urlGit="https://github.com/Sc00pex"
          urlLinked="https://www.linkedin.com/in/kayann-leandro-de-s%C3%A1/"
          urlInsta=""
        />
      </CardsContainer>
    </Container>
  );
}
