import axios from "axios";

const API_URL = "/football-data/v4";

export async function buscarTimesBrasileirao(signal) {
  try {
    const resposta = await axios.get(`${API_URL}/competitions/BSA/teams`, {
      signal,
    });

    return resposta.data.teams ?? [];
  } catch (error) {
    if (error.code === "ERR_CANCELED") {
      throw error;
    }

    if (error.response?.status === 401) {
      throw new Error(
        "Token da API inválido. Confira o valor de VITE_API_KEY no arquivo .env.",
      );
    }
    if (error.response?.status === 403) {
      throw new Error(
        "A API recusou o acesso. Confira o token e o plano da conta.",
      );
    }
    if (error.response?.status === 429) {
      throw new Error(
        "Limite de consultas atingido. Tente novamente em alguns minutos.",
      );
    }
    if (!error.response) {
      throw new Error(
        "Não foi possível conectar à API. Confira sua conexão e tente novamente.",
      );
    }

    throw new Error("Não foi possível carregar os times do Brasileirão.");
  }
}

export async function buscarRodadas(matchday, signal) {
  try {
    const resposta = await axios.get(
      `${API_URL}/competitions/BSA/matches`,
      {
        params: { matchday },
        signal,
      },
    );

    return resposta.data.matches ?? [];
  } catch (error) {
    if (error.code === "ERR_CANCELED") {
      throw error;
    }

    if (error.response?.status === 401) {
      throw new Error(
        "Token da API inválido. Confira o valor de VITE_API_KEY no arquivo .env.",
      );
    }
    if (error.response?.status === 403) {
      throw new Error(
        "A API recusou o acesso. Confira o token e o plano da conta.",
      );
    }
    if (error.response?.status === 429) {
      throw new Error(
        "Limite de consultas atingido. Tente novamente em alguns minutos.",
      );
    }
    if (!error.response) {
      throw new Error(
        "Não foi possível conectar à API. Confira sua conexão e tente novamente.",
      );
    }

    throw new Error("Não foi possível carregar as partidas do Brasileirão.");
  }
}
