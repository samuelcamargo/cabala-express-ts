
# Cabala Express API

Este é um projeto Node.js que utiliza Express e TypeScript para criar uma API de cálculo cabalístico. A arquitetura do projeto é baseada em uma estrutura de MVC, com testes implementados usando Jest e Supertest.

## Arquitetura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
cabala-express/
├── src/
│   ├── controllers/         # Controladores que contêm a lógica de cada rota
│   ├── routes/              # Definição das rotas da API
│   ├── models/              # Modelos de dados e configurações
│   ├── app.ts               # Configuração principal do aplicativo Express
│   └── server.ts            # Arquivo de inicialização do servidor
├── __tests__/               # Testes unitários e de integração
│   ├── app.test.ts          # Teste de integração para o servidor
│   └── controllers/         # Testes dos controladores
├── .env                     # Arquivo de variáveis de ambiente
├── .gitignore               # Arquivos e pastas ignorados pelo Git
├── jest.config.js           # Configuração do Jest para TypeScript
├── package.json             # Dependências e scripts do projeto
└── tsconfig.json            # Configuração do TypeScript
```

## Pré-requisitos

Antes de iniciar, certifique-se de que você tenha o **Node.js** e o **npm** instalados. Recomendamos usar uma versão do Node.js 16 ou superior.

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cabala-express.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd cabala-express
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Crie um arquivo `.env` na raiz do projeto com as variáveis de ambiente necessárias. Exemplo:
   ```env
   PORT=3000
   ```

## Scripts Disponíveis

No `package.json`, existem scripts configurados para facilitar o desenvolvimento e testes do projeto:

- **`npm run dev`**: Inicia o servidor no modo de desenvolvimento com **ts-node-dev** para recarregar automaticamente as mudanças.
- **`npm run build`**: Compila o TypeScript para JavaScript e gera os arquivos na pasta `dist`.
- **`npm start`**: Inicia o servidor em modo de produção usando os arquivos compilados na pasta `dist`.
- **`npm test`**: Executa os testes com **Jest**.
- **`npm run test:watch`**: Executa os testes no modo de observação, reiniciando-os automaticamente quando há mudanças.

## Executando o Projeto

1. **Modo Desenvolvimento**:
   Para iniciar o servidor em modo de desenvolvimento com recarregamento automático:

   ```bash
   npm run dev
   ```

   O servidor será iniciado em `http://localhost:3000` (ou a porta especificada no arquivo `.env`).

2. **Modo Produção**:
   Para rodar o servidor em modo de produção, primeiro compile o projeto e depois inicie o servidor:

   ```bash
   npm run build
   npm start
   ```

## Executando os Testes

Para garantir a integridade do projeto, você pode executar testes unitários e de integração usando **Jest** e **Supertest**.

1. Para executar todos os testes uma vez:
   ```bash
   npm test
   ```

2. Para executar os testes no modo de observação:
   ```bash
   npm run test:watch
   ```

### Estrutura dos Testes

- **Testes de integração** estão localizados em `__tests__/app.test.ts`, onde testamos as rotas e o comportamento geral da API.
- **Testes unitários** para os controladores podem ser encontrados na pasta `__tests__/controllers/`.

## Contribuição

Sinta-se à vontade para fazer um fork do repositório e enviar pull requests com melhorias e novas funcionalidades. Toda contribuição é bem-vinda!

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais detalhes.
