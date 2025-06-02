# 🎬 Clone de Streaming com Funcionalidade de Favoritos

Este projeto é um backend para uma plataforma de streaming estilo Netflix, construído com Node.js e TypeScript. Ele oferece funcionalidades de autenticação, gerenciamento de usuários e controle de favoritos. A aplicação permite que usuários cadastrados façam login, acessem conteúdos e adicionem títulos à sua lista de favoritos.

## 🔧 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **Sequelize (ORM)**
- **PostgreSQL**
- **JWT (Autenticação)**
- **Docker** (opcional)
- **Jest + Supertest** (testes automatizados)

---

## 📁 Estrutura de Pastas

```
src/
├── controllers/         # AuthController, UserController, UserFavoriteController
├── models/              # Modelos Sequelize (User, Favorite, etc)
├── services/            # Lógica de negócios separada dos controllers
├── routes/              # Arquivos de rotas
├── middlewares/         # Middleware de autenticação e erros
├── config/              # Configurações (ex: Sequelize)
├── types/               # Tipagens customizadas (ex: AuthenticatedRequest)
├── index.ts             # Arquivo principal do servidor
tests/
└── controllers/         # Testes com Jest e Supertest
```

---

## 📌 Funcionalidades

- ✅ Cadastro de usuários
- ✅ Login com JWT
- ✅ Middleware de autenticação
- ✅ Acesso autenticado à tela inicial com conteúdos
- ✅ Adicionar/Remover filmes ou séries aos favoritos
- ✅ Listar favoritos do usuário logado
- ✅ Testes automatizados com cobertura para controllers

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz com as variáveis abaixo:

```
PORT=3000
DATABASE_URL=postgres://usuario:senha@localhost:5432/nome_do_banco
JWT_SECRET=sua_chave_secreta
```

### 4. Execute as migrações e inicie o servidor

```bash
npx sequelize db:migrate
npm run dev
```

---

## ✅ Executando os Testes

```bash
npm test
```

Os testes cobrem fluxos principais como autenticação e manipulação de favoritos.

---

## 🔐 Autenticação

Utilize JWT para acessar rotas protegidas. Exemplo de cabeçalho:

```
Authorization: Bearer seu_token_aqui
```

---

## 📫 Contato

- **Nome**: Barbara Menezes
- **LinkedIn**: [SeuPerfil](https://www.linkedin.com/in/seu-perfil)
- **Email**: seu-email@exemplo.com