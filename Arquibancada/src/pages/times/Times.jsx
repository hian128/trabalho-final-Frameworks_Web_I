import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Search } from "lucide-react";
import CardClube from "../../components/CardClube";
import { buscarTimesBrasileirao } from "../../api/footballDataApi";

const Container = styled.div`
  width: min(1120px, 100%);
  margin: 0 auto;
  padding: 2.5rem 0 4rem;
`;
const Intro = styled.div`
  margin-bottom: 2rem;
  p { margin: 0.5rem 0 0; color: #9eaca2; line-height: 1.6; }
`;
const Eyebrow = styled.p`
  color: #8ee6a0 !important;
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
const Results = styled.p`
  margin: 0 0 1rem;
  color: #aab7ad;
  font-size: 0.9rem;
`;
const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 235px), 1fr));
  gap: 1rem;
`;
const Mensagem = styled.div`
  padding: 2rem;
  border: 1px solid ${({ $erro }) => ($erro ? "rgba(255, 120, 120, .25)" : "rgba(148, 163, 184, .15)")};
  border-radius: 18px;
  background: #121d18;
  color: ${({ $erro }) => ($erro ? "#ffaaaa" : "#aab7ad")};
  text-align: center;
  line-height: 1.6;
`;
const VazioIcone = styled.span`
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  margin: 0 auto 0.8rem;
  border-radius: 16px;
  background: rgba(142, 230, 160, 0.1);
  color: #8ee6a0;
`;

function normalizar(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLocaleLowerCase("pt-BR");
}

export default function Times() {
  const [times, setTimes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");
  const [params] = useSearchParams();
  const busca = params.get("busca")?.trim() ?? "";

  useEffect(() => {
    const controller = new AbortController();
    async function carregarTimes() {
      try {
        const equipes = await buscarTimesBrasileirao(controller.signal);
        setTimes(equipes);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") setErro(error.message || "Não foi possível buscar as equipes.");
      } finally {
        if (!controller.signal.aborted) setCarregando(false);
      }
    }
    carregarTimes();
    return () => controller.abort();
  }, []);

  const equipesFiltradas = useMemo(() => {
    const termo = normalizar(busca);
    if (!termo) return times;
    return times.filter((time) => normalizar(`${time.name ?? ""} ${time.shortName ?? ""} ${time.tla ?? ""}`).includes(termo));
  }, [busca, times]);

  return (
    <Container>
      <Intro>
        <Eyebrow>Brasileirão Série A</Eyebrow>
        <Titulo>Clubes da competição</Titulo>
        <p>Conheça as equipes participantes e acesse os sites oficiais.</p>
      </Intro>
      {busca && <Results>Resultados para <strong>“{busca}”</strong></Results>}
      {carregando && <Mensagem>Carregando equipes…</Mensagem>}
      {!carregando && erro && <Mensagem $erro>{erro}</Mensagem>}
      {!carregando && !erro && equipesFiltradas.length === 0 && (
        <Mensagem><VazioIcone><Search size={21} /></VazioIcone>Nenhuma equipe encontrada{busca ? ` para “${busca}”` : ""}. Tente outro nome.</Mensagem>
      )}
      {!carregando && !erro && equipesFiltradas.length > 0 && (
        <>
          <Results>{equipesFiltradas.length} {equipesFiltradas.length === 1 ? "equipe encontrada" : "equipes encontradas"}</Results>
          <Lista>
            {equipesFiltradas.map((time) => (
              <CardClube key={time.id} clube={{ nome: time.shortName || time.name, escudo: time.crest, serie: "Brasileirão Série A", link: time.website }} />
            ))}
          </Lista>
        </>
      )}
    </Container>
  );
}
