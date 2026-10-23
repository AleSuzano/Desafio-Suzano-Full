# Sistema de Gestão de Produtos - Frontend

Aplicação web desenvolvida com **Next.js**, **TypeScript** e **Tailwind CSS** para o gerenciamento de produtos, com cadastro em tempo real, busca com filtros dinâmicos, ordenação e testes de snapshot.

---

## Tecnologias Utilizadas

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Gerenciamento de Estado:** React Context API
- **Testes:** Jest &amp; React Testing Library

---

## Funcionalidades

1. **Listagem de Produtos:** Exibição com nome, categoria, preço, descrição e imagem [3].
2. **Cadastro em Tempo Real:** Formulário para inserção de novos produtos [1, 3].
3. **Filtros Dinâmicos:** Busca por nome e filtragem por faixa de preço [3].
4. **Ordenação:** Agrupamento por Nome (A-Z / Z-A) e Preço (Crescente / Decrescente) [3].
5. **Design Responsivo:** Adaptado para dispositivos móveis e desktop [1].

---

## Como Rodar o Projeto Localmente

### Pré-requisitos
- Node.js (v18 ou superior)
- npm ou yarn

### Instalação

1. Clone o repositório:
   ```bash
   git clone
<URL_DO_SEU_REPOSITORIO> 

Acesse a pasta do projeto:
cd desafio-frontend 

Instale as dependências:
npm install 

Inicie o servidor de desenvolvimento:

npm run dev 

Abra http://localhost:3000 no seu navegador.

Executando os Testes Automatizados
O projeto conta com testes de snapshot configurados com Jest e React Testing Library[1].
Para rodar a suíte de testes:
npm test

________________________________________
 Decisões de Arquitetura
Context API: Optou-se pela Context API para manter o gerenciamento de estado leve, limpo e direto, atendendo aos requisitos sem introduzir complexidade desnecessária de bibliotecas externas.
Componentização: O código foi estruturado de forma modular (dividido em components, context, types e services), respeitando os princípios de código limpo.
