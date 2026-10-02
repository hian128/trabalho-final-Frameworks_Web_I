import { useEffect, useState } from "react";
import styled from "styled-components";
import { buscarRodadas } from "../../api/footballDataApi";

const CampContainer = styled.div`
  width: min(1000px, 100%);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2.5rem 0 4rem;
  width: 100%;
`;

const Titulo = styled.h1`
  margin: 0;
  color: #f4f7f3;
  font-size: clamp(2rem, 4vw, 3.2rem);
  letter-spacing: -0.055em;
`;

const Introducao = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
  p { margin: 0.55rem 0 0; color: #9eaca2; line-height: 1.6; }
  .eyebrow { color: #8ee6a0; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.15em; text-transform: uppercase; }
`;

const SeletorRodada = styled.select`
  align-self: flex-start;
  padding: 0.85rem 1rem;
  color: #f4f7f3;
  background: #15221b;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 12px;
  font: inherit;
  cursor: pointer;
  &:focus-visible { outline: 2px solid #8ee6a0; outline-offset: 2px; }
`;

const BuscaPartidas = styled.input`
  align-self: stretch;
  max-width: 460px;
  padding: 0.85rem 1rem;
  border: 1px solid rgba(148, 163, 184, 0.2);
  border-radius: 12px;
  outline: 0;
  background: #121d18;
  color: #f4f7f3;
  font: inherit;
  &::placeholder { color: #829087; }
  &:focus { border-color: #70ce82; box-shadow: 0 0 0 3px rgba(112, 206, 130, 0.12); }
`;

const CartaoRodada = styled.section`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 1.25rem;
  background: linear-gradient(145deg, #15221b, #111a16);
  border: 1px solid rgba(148, 163, 184, 0.16);
  border-radius: 20px;
`;

const TituloRodada = styled.h2`
  margin: 0 0 1rem;
  color: #8ee6a0;
  font-size: 1.25rem;
`;

const Partida = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  color: #ecf2ed;

  & + & {
    border-top: 1px solid rgba(148, 163, 184, 0.13);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr auto 1fr;
    gap: 0.5rem;
    font-size: 0.9rem;
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  min-width: 0;
`;

const Mandante = styled(Time)`
  justify-content: flex-end;
  text-align: right;
`;

const Visitante = styled(Time)`
  justify-content: flex-start;
  text-align: left;
`;

const NomeTime = styled.span`
  overflow-wrap: anywhere;
`;

const Escudo = styled.img`
  width: 34px;
  height: 34px;
  flex: 0 0 34px;
  object-fit: contain;

  @media (max-width: 600px) {
    width: 26px;
    height: 26px;
    flex-basis: 26px;
  }
`;

const Placar = styled.strong`
  color: #8ee6a0;
  white-space: nowrap;
`;

const DataPartida = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  color: #9eaca2;
  text-align: center;
  font-size: 0.85rem;
`;

const Mensagem = styled.p`
  color: ${({ $erro }) => ($erro ? "#ffaaaa" : "#aab7ad")};
  text-align: center;
  font-weight: 600;
  line-height: 1.6;
`;

function formatarData(data) {
  return new Date(data).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function normalizar(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
}

function Campeonatos() {
  const [rodadaSelecionada, setRodadaSelecionada] = useState("");
  const [partidas, setPartidas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");
  const [buscaPartida, setBuscaPartida] = useState("");

  const partidasFiltradas = partidas.filter((partida) => {
    const termo = normalizar(buscaPartida.trim());
    if (!termo) return true;
    return normalizar(`${partida.homeTeam.name} ${partida.homeTeam.shortName ?? ""} ${partida.awayTeam.name} ${partida.awayTeam.shortName ?? ""}`).includes(termo);
  });

  useEffect(() => {
    if (!rodadaSelecionada) {
      setPartidas([]);
      setCarregando(false);
      return;
    }

    const controller = new AbortController();
    setPartidas([]);
    setErro("");
    setCarregando(true);

    async function carregarRodadas() {
      try {
        const dados = await buscarRodadas(
          Number(rodadaSelecionada),
          controller.signal,
        );
        setPartidas(dados);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setErro(error.message || "Ocorreu um erro ao buscar as partidas.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    carregarRodadas();
    return () => controller.abort();
  }, [rodadaSelecionada]);

  function selecionarRodada(event) {
    setRodadaSelecionada(event.target.value);
    setBuscaPartida("");
  }

  return (
    <CampContainer>
      <Introducao>
        <p className="eyebrow">Temporada nacional</p>
        <Titulo>Brasileirão Série A</Titulo>
        <p>Escolha uma rodada para consultar confrontos e resultados disponíveis.</p>
      </Introducao>
      <SeletorRodada
        value={rodadaSelecionada}
        onChange={selecionarRodada}
        aria-label="Selecione uma rodada do Brasileirão"
      >
        <option value="">Selecione uma rodada</option>
        {Array.from({ length: 38 }, (_, index) => index + 1).map((rodada) => (
          <option key={rodada} value={rodada}>
            Rodada {rodada}
          </option>
        ))}
      </SeletorRodada>

      {rodadaSelecionada && !carregando && !erro && partidas.length > 0 && (
        <BuscaPartidas
          type="search"
          aria-label="Filtrar partidas pelo nome de um clube"
          placeholder="Filtrar partidas por clube..."
          value={buscaPartida}
          onChange={(event) => setBuscaPartida(event.target.value)}
        />
      )}

      {carregando && <Mensagem>Carregando partidas da rodada...</Mensagem>}
      {!carregando && erro && <Mensagem $erro>{erro}</Mensagem>}
      {!carregando && !erro && rodadaSelecionada && partidas.length === 0 && (
        <Mensagem>Nenhuma partida encontrada nesta rodada.</Mensagem>
      )}
      {!carregando && !erro && buscaPartida && partidas.length > 0 && partidasFiltradas.length === 0 && (
        <Mensagem>Nenhuma partida encontrada para “{buscaPartida}”.</Mensagem>
      )}
      {!rodadaSelecionada && (
        <Mensagem>Selecione uma rodada para ver os resultados.</Mensagem>
      )}

      {!carregando && !erro && partidasFiltradas.length > 0 && (
        <CartaoRodada>
          <TituloRodada>Rodada {rodadaSelecionada}</TituloRodada>
          {partidasFiltradas.map((partida) => {
            const golsMandante = partida.score?.fullTime?.home;
            const golsVisitante = partida.score?.fullTime?.away;
            const temPlacar = golsMandante != null && golsVisitante != null;

            return (
              <Partida key={partida.id}>
                <Mandante>
                  {partida.homeTeam.crest && (
                    <Escudo
                      src={partida.homeTeam.crest}
                      alt={`Escudo do ${partida.homeTeam.name}`}
                    />
                  )}
                  <NomeTime>
                    {partida.homeTeam.shortName || partida.homeTeam.name}
                  </NomeTime>
                </Mandante>
                <Placar>
                  {temPlacar ? `${golsMandante} x ${golsVisitante}` : "x"}
                </Placar>
                <Visitante>
                  <NomeTime>
                    {partida.awayTeam.shortName || partida.awayTeam.name}
                  </NomeTime>
                  {partida.awayTeam.crest && (
                    <Escudo
                      src={partida.awayTeam.crest}
                      alt={`Escudo do ${partida.awayTeam.name}`}
                    />
                  )}
                </Visitante>
                <DataPartida>{formatarData(partida.utcDate)}</DataPartida>
              </Partida>
            );
          })}
        </CartaoRodada>
      )}
    </CampContainer>
  );
}

export default Campeonatos;
