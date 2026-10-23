# API RESTful de Gestão de Produtos e Pedidos - NestJS

API RESTful desenvolvida em **NestJS** como solução para o desafio técnico de gestão de produtos e pedidos. A aplicação utiliza arquitetura em camadas, princípios **SOLID**, banco de dados **SQLite** com **TypeORM**, middleware de logs, validações de dados via **DTOs** e documentação automática com **Swagger**.

---

## Tecnologias Utilizadas

- **Framework:** NestJS (TypeScript)
- **Banco de Dados:** SQLite (`better-sqlite3`)
- **ORM:** TypeORM
- **Validação de Dados:** `class-validator` &amp; `class-transformer`
- **Documentação da API:** `@nestjs/swagger`
- **Testes Unitários:** Jest

---

## Arquitetura e Padrões Aplicados

- **Arquitetura em Camadas:** Separação clara de responsabilidades entre *Controllers*, *Services*, *Entities* e *DTOs*.
- **Princípios SOLID:** Baixo acoplamento e injeção de dependências nativa do NestJS.
- **Middleware:** `LoggerMiddleware` para auditoria e log detalhado das requisições HTTP (Método, Rota, StatusCode e User-Agent).
- **Baixa de Estoque Automática:** Ao criar um pedido (`POST /orders`), a API valida o estoque disponível para cada item e realiza a baixa automaticamente.

---

## Como Executar o Projeto Localmente

### **Pré-requisitos**
- Node.js (v18 ou superior)
- npm

### **Passos**
1. **Clonar o repositório:**
   ```bash
   git clone
   cd Desafio-Suzano-Backend


Instalar as dependências:
npm install


Iniciar a aplicação em modo de desenvolvimento:
npm run start:dev


A aplicação estará rodando em: http://localhost:3002.
________________________________________
📚 Documentação da API (Swagger)
A documentação interativa com todos os endpoints e esquemas de requisição/resposta pode ser acessada em:
http://localhost:3002/api/docs
Principais Rotas:
Produtos ( /products )
POST /products — Criar um novo produto
GET /products — Listar todos os produtos
GET /products/:id — Buscar produto por ID
PATCH /products/:id — Atualizar produto existente
DELETE /products/:id — Remover produto
Pedidos ( /orders )
POST /orders — Criar novo pedido (com verificação e baixa de estoque)
GET /orders — Listar todos os pedidos
GET /orders/:id — Buscar pedido por ID
________________________________________
🧪 Executando os Testes Automatizados
Para rodar os testes unitários da aplicação:
npm run test
