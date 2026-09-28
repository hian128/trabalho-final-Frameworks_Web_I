import { useEffect, useState } from "react";
import styled from "styled-components";
import { buscarRodadas } from "../../api/footballDataApi";

const CampContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
  width: 100%;
`;

const Titulo = styled.h1`
  color: #38bdf8;
  font-weight: bold;
  font-style: italic;
`;

const SeletorRodada = styled.select`
  padding: 0.7rem 1rem;
  color: #ffffff;
  background: #121824;
  border: 1px solid #334155;
  border-radius: 8px;
  font: inherit;
`;

const CartaoRodada = styled.section`
  width: 100%;
  max-width: 900px;
  box-sizing: border-box;
  padding: 1.25rem;
  background: #121824;
  border: 1px solid #1f293d;
  border-radius: 12px;
`;

const TituloRodada = styled.h2`
  margin: 0 0 1rem;
  color: #38bdf8;
  font-size: 1.25rem;
`;

const Partida = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 0;
  color: #ffffff;

  & + & {
    border-top: 1px solid #1f293d;
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
  color: #00e676;
  white-space: nowrap;
`;

const DataPartida = styled.p`
  grid-column: 1 / -1;
  margin: 0;
  color: #94a3b8;
  text-align: center;
  font-size: 0.85rem;
`;

const Mensagem = styled.p`
  color: ${({ $erro }) => ($erro ? "#b91c1c" : "#334155")};
  text-align: center;
  font-weight: 600;
`;

function formatarData(data) {
  return new Date(data).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function Campeonatos() {
  const [rodadaSelecionada, setRodadaSelecionada] = useState("");
  const [partidas, setPartidas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

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
  }

  return (
    <CampContainer>
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

      {carregando && <Mensagem>Carregando partidas da rodada...</Mensagem>}
      {!carregando && erro && <Mensagem $erro>{erro}</Mensagem>}
      {!carregando && !erro && rodadaSelecionada && partidas.length === 0 && (
        <Mensagem>Nenhuma partida encontrada nesta rodada.</Mensagem>
      )}
      {!rodadaSelecionada && (
        <Mensagem>Selecione uma rodada para ver os resultados.</Mensagem>
      )}

      {!carregando && !erro && partidas.length > 0 && (
        <CartaoRodada>
          <TituloRodada>Rodada {rodadaSelecionada}</TituloRodada>
          {partidas.map((partida) => {
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
