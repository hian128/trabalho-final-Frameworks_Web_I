import axios from "axios";

const API_URL = "/football-data/v4";

function tratarErro(error, tipo) {
  if (error.code === "ERR_CANCELED") throw error;
  if (error.response?.status === 401) {
    throw new Error("Token da football-data.org inválido. Confira a configuração local da API.");
  }
  if (error.response?.status === 403) {
    throw new Error("A football-data.org recusou o acesso. Confira o token e as permissões da conta.");
  }
  if (error.response?.status === 429) {
    throw new Error("Limite de consultas atingido. Tente novamente mais tarde.");
  }
  if (!error.response) {
    throw new Error("Não foi possível conectar à API. Confira sua conexão e tente novamente.");
  }
  throw new Error(`Não foi possível carregar ${tipo}.`);
}

export async function buscarTimesBrasileirao(signal) {
  try {
    const resposta = await axios.get(`${API_URL}/competitions/BSA/teams`, { signal });
    return resposta.data.teams ?? [];
  } catch (error) {
    tratarErro(error, "os times do Brasileirão");
  }
}

export async function buscarRodadas(matchday, signal) {
  try {
    const resposta = await axios.get(`${API_URL}/competitions/BSA/matches`, {
      params: { matchday },
      signal,
    });
    return resposta.data.matches ?? [];
  } catch (error) {
    tratarErro(error, "as partidas do Brasileirão");
  }
}
