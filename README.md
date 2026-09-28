# Arquibancada

O Arquibancada é um site para acompanhar o futebol brasileiro, com foco no Brasileirão Série A. A aplicação reúne uma página de equipes, consulta de partidas por rodada e uma área de jogos ao vivo.

O projeto foi desenvolvido para o trabalho final de **Frameworks Web I**, colocando em prática os conteúdos de React vistos na disciplina. Os dados de equipes e partidas são consultados na [API football-data.org](https://www.football-data.org/).

## Integrantes

- Kayann Leandro de Sá
- Guilherme Hermes
- Evelyn Gregório
- Hian Oliveira
- Matheus Rodrigues

## Tecnologias

- React e Vite
- React Router para navegação entre páginas
- Styled Components para estilização
- Axios para as requisições à API
- football-data.org para os dados do Brasileirão

## Como rodar o projeto

É necessário ter Node.js (recomendado: versão 22.12 ou superior) e npm instalados. No terminal, entre na pasta que contém o `package.json`:

```bash
cd Arquibancada
npm install
```

Crie um arquivo `.env` nessa mesma pasta e configure o token da API:

```env
VITE_API_KEY=seu_token_da_football_data
```

O `vite.config.js` encaminha as requisições pelo proxy local e inclui o token no cabeçalho esperado pela API. Não compartilhe nem envie seu token para um repositório público.

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Abra no navegador o endereço local exibido no terminal. É necessária conexão com a internet para consultar os dados da API.

Para gerar a versão de produção, use:

```bash
npm run build
```

## O que dá para fazer no site

- Navegar entre Início, Brasileirão Série A, Ao Vivo, Equipes e Integrantes.
- Consultar os clubes disponíveis na competição Brasileirão Série A.
- Escolher uma rodada para carregar as partidas correspondentes, com escudos, placar quando disponível e data/horário.
- Acessar a área Ao Vivo, destinada aos jogos em tempo real.

Os dados exibidos dependem das informações disponíveis no plano da API e do estado atual da competição. A área Ao Vivo é uma tela de apresentação e ainda não consulta partidas em tempo real.
