import styled from "styled-components";
import { ArrowDownRight, ArrowRight, CalendarDays, Shield, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

const HomeContainer = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: clamp(2.5rem, 7vw, 6rem) 0 3rem;
`;

const Hero = styled.section`
  position: relative;
  overflow: hidden;
  padding: clamp(2rem, 6vw, 5.5rem);
  border: 1px solid rgba(166, 220, 173, 0.2);
  border-radius: 30px;
  background: radial-gradient(ellipse at 88% 18%, rgba(81, 186, 99, 0.22), transparent 36%),
    linear-gradient(130deg, #14221b 0%, #101a17 55%, #17251b 100%);

  &::after {
    content: "";
    position: absolute;
    right: -5rem;
    bottom: -10rem;
    width: 26rem;
    height: 26rem;
    border: 1px solid rgba(142, 230, 160, 0.13);
    border-radius: 50%;
    box-shadow: 0 0 0 2rem rgba(142, 230, 160, 0.025), 0 0 0 5rem rgba(142, 230, 160, 0.02);
    pointer-events: none;
  }
`;

const Eyebrow = styled.p`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin: 0 0 1rem;
  color: #8ee6a0;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

const Titulo = styled.h1`
  position: relative;
  z-index: 1;
  max-width: 720px;
  margin: 0;
  color: #f4f7f3;
  font-size: clamp(2.5rem, 6vw, 5.2rem);
  font-weight: 850;
  letter-spacing: -0.065em;
  line-height: 0.98;

  span { color: #8ee6a0; }
`;

const Subtitulo = styled.p`
  position: relative;
  z-index: 1;
  max-width: 570px;
  margin: 1.4rem 0 2rem;
  color: #b2beb5;
  font-size: clamp(1rem, 2vw, 1.15rem);
  line-height: 1.75;
`;

const Acoes = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const Acao = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 48px;
  padding: 0.7rem 1.2rem;
  border: 1px solid ${({ $primaria }) => ($primaria ? "#8ee6a0" : "rgba(210, 225, 213, 0.2)")};
  border-radius: 999px;
  background: ${({ $primaria }) => ($primaria ? "#8ee6a0" : "rgba(255,255,255,0.04)")};
  color: ${({ $primaria }) => ($primaria ? "#112318" : "#e7eee8")};
  font-weight: 750;
  text-decoration: none;
  transition: transform 160ms ease, background 160ms ease;
  &:hover { transform: translateY(-2px); }
`;

const Secao = styled.section`
  padding-top: clamp(3rem, 7vw, 5.5rem);
`;

const SecaoTopo = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1.5rem;

  h2 { margin: 0; color: #f1f5f1; font-size: clamp(1.5rem, 3vw, 2rem); letter-spacing: -0.04em; }
  p { margin: 0.4rem 0 0; color: #9eaca2; }
`;

const Cartoes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 700px) { grid-template-columns: 1fr; }
`;

const Cartao = styled(Link)`
  display: flex;
  gap: 1rem;
  min-height: 140px;
  padding: 1.35rem;
  border: 1px solid rgba(148, 163, 184, 0.15);
  border-radius: 20px;
  background: #121d18;
  color: inherit;
  text-decoration: none;
  transition: border-color 160ms ease, transform 160ms ease;
  &:hover { transform: translateY(-3px); border-color: rgba(142, 230, 160, 0.55); }
  h3 { margin: 0 0 0.45rem; color: #edf4ee; font-size: 1.05rem; }
  p { margin: 0; color: #9eaca2; font-size: 0.9rem; line-height: 1.55; }
`;

const Icone = styled.span`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex: 0 0 44px;
  border-radius: 14px;
  background: rgba(142, 230, 160, 0.11);
  color: #8ee6a0;
`;

export default function Home() {
  return (
    <HomeContainer>
      <Hero>
        <Eyebrow><Trophy size={15} /> Futebol brasileiro, em foco</Eyebrow>
        <Titulo>O Brasileirão começa <span>aqui.</span></Titulo>
        <Subtitulo>
          Consulte os clubes da Série A e acompanhe partidas rodada por rodada,
          com informações da API football-data.org.
        </Subtitulo>
        <Acoes>
          <Acao to="/campeonatos" $primaria>Ver partidas <ArrowRight size={17} /></Acao>
          <Acao to="/times">Conhecer equipes <ArrowDownRight size={17} /></Acao>
        </Acoes>
      </Hero>

      <Secao>
        <SecaoTopo>
          <div><h2>Explore o Arquibancada</h2><p>Informação da competição em poucos cliques.</p></div>
        </SecaoTopo>
        <Cartoes>
          <Cartao to="/campeonatos"><Icone><CalendarDays size={21} /></Icone><div><h3>Partidas por rodada</h3><p>Escolha uma rodada e veja confrontos, datas e placares disponíveis.</p></div></Cartao>
          <Cartao to="/times"><Icone><Shield size={21} /></Icone><div><h3>Clubes da Série A</h3><p>Consulte as equipes participantes e acesse seus sites oficiais.</p></div></Cartao>
          <Cartao to="/integrantes"><Icone><Trophy size={21} /></Icone><div><h3>Nosso projeto</h3><p>Conheça as pessoas que desenvolveram esta aplicação.</p></div></Cartao>
        </Cartoes>
      </Secao>
    </HomeContainer>
  );
}
