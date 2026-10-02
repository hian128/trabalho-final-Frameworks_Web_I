# Arquibancada

O Arquibancada é um site para acompanhar o futebol brasileiro, com foco no Brasileirão Série A. A aplicação reúne páginas de equipes e consulta de partidas por rodada.

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

## Como executar

Você precisa ter o [Node.js 22.12 ou superior](https://nodejs.org/) instalado. O npm é instalado junto com o Node.js. Também é necessária conexão com a internet para buscar os dados da API.

### 1. Abra o terminal na pasta do projeto

Se você abriu o terminal na pasta que contém a pasta `Arquibancada`, entre nela:

```bash
cd Arquibancada
```

Se o terminal já estiver aberto dentro de `Arquibancada`, pule esse comando.

### 2. Instale as dependências

```bash
npm install
```

### 3. Inicie o site

```bash
npm run dev
```

Abra no navegador o endereço mostrado no terminal, normalmente `http://localhost:5173`.

## Gerar a versão de produção

Para verificar se o projeto compila, execute:

```bash
npm run build
```


## O que dá para fazer no site

- Navegar entre Início, Brasileirão Série A, Equipes e Integrantes.
- Consultar os clubes disponíveis na competição Brasileirão Série A.
- Buscar equipes pelo nome e filtrar as partidas da rodada selecionada pelo nome de um clube.
- Escolher uma rodada para carregar as partidas correspondentes, com escudos, placar quando disponível e data/horário.

Os dados exibidos dependem das permissões e dos limites da conta na football-data.org.
