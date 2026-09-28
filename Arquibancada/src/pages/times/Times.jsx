import { useEffect, useState } from "react";
import styled from "styled-components";
import CardClube from "../../components/CardClube";
import { buscarTimesBrasileirao } from "../../api/footballDataApi";

const TimesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;
`;

const Titulo = styled.h1`
  color: #38bdf8;
  font-weight: bold;
  font-style: italic;
`;

const ListaTimes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  justify-items: center;
  gap: 1.5rem;
`;

const Mensagem = styled.p`
  color: ${({ $erro }) => ($erro ? "#b91c1c" : "#334155")};
  text-align: center;
  font-weight: 600;
`;

function Times() {
  const [times, setTimes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function carregarTimes() {
      try {
        const equipes = await buscarTimesBrasileirao(controller.signal);
        setTimes(equipes);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setErro(error.message || "Ocorreu um erro ao buscar os times.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setCarregando(false);
        }
      }
    }

    carregarTimes();
    return () => controller.abort();
  }, []);

  return (
    <TimesContainer>
      {carregando && <Mensagem>Carregando equipes...</Mensagem>}
      {!carregando && erro && <Mensagem $erro>{erro}</Mensagem>}
      {!carregando && !erro && times.length === 0 && (
        <Mensagem>Nenhuma equipe encontrada.</Mensagem>
      )}

      {!erro && times.length > 0 && (
        <ListaTimes>
          {times.map((time) => (
            <CardClube
              key={time.id}
              clube={{
                nome: time.shortName || time.name,
                escudo: time.crest,
                serie: "Brasileirão Série A",
                link: time.website,
              }}
            />
          ))}
        </ListaTimes>
      )}
    </TimesContainer>
  );
}

export default Times;
