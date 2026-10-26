# Desafio Técnico Fullstack - Gestão de Produtos e Pedidos

Este repositório contém a solução completa para o teste técnico, reunindo uma aplicação web Frontend (Next.js) e uma API RESTful Backend (NestJS) em uma estrutura de monorepo.

---

## Estrutura do Projeto

```text
desafio-fullstack/
├── desafio-frontend/   # Aplicação Frontend (Next.js, React, Tailwind CSS)
├── desafio-backend/    # API RESTful Backend (NestJS, TypeORM, SQLite)
└── README.md           # Visão geral e instruções do projeto


________________________________________
Tecnologias e Arquitetura

Frontend ( /desafio-frontend )
Framework: Next.js com TypeScript.
Estilização: Tailwind CSS.
Funcionalidades:
Listagem de produtos com exibição de nome, categoria, preço, descrição e imagem.
Formatação e formulário para cadastro de novos produtos.
Filtros de busca (por nome e faixa de preço) e ordenação dos resultados.
Design totalmente responsivo e tratamento de estado global.

Backend ( /desafio-backend )
Framework: NestJS (Node.js) em TypeScript.
Banco de Dados & ORM: TypeORM integrado com SQLite (better-sqlite3).
Arquitetura: Separação clara em camadas (Controllers, Services, Entities e DTOs) aplicando os princípios SOLID.
Segurança & Auditoria: LoggerMiddleware para rastreamento de requisições HTTP e validação de DTOs com class-validator.
Regra de Negócio de Pedidos: Validação de disponibilidade de estoque e baixa automática ao concluir um pedido.
Documentação: Swagger interativo integrado.
________________________________________
Como Executar o Projeto Localmente
Pré-requisitos
Node.js: v18 ou superior
npm: Gerenciador de pacotes
________________________________________
1. Executando o Backend (API RESTful)
Acesse o diretório do backend:
cd desafio-backend


Instale as dependências:
npm install


Inicie o servidor em modo de desenvolvimento:
npm run start:dev


O backend estará disponível em: http://localhost:3002.
A documentação interativa da API (Swagger) pode ser acessada em: http://localhost:3001/api/docs.
________________________________________
2. Executando o Frontend (Aplicação Web)
Em uma nova janela de terminal, acesse o diretório do frontend:
cd desafio-frontend


Instale as dependências:
npm install


Inicie a aplicação:
npm run dev


O frontend estará disponível em: http://localhost:3000.
________________________________________
🧪 Execução dos Testes Automatizados
Ambos os projetos contêm suítes de testes automatizados para garantir a qualidade do código e a robustez das funcionalidades.
Testes do Backend:
cd desafio-backend
npm run test


Testes do Frontend:
cd desafio-frontend
npm run test


________________________________________
Critérios de Avaliação:
Organização e Qualidade do Código: Código limpo (DRY/SOLID) com separação em camadas no backend e componentes no frontend.
Validação e Integridade de Dados: Checagem rigorosa de estoque na criação de pedidos e DTOs tipados.
Documentação: Instruções completas de execução e API Swagger gerada automaticamente.