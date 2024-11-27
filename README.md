# Planeja Fácil 🚀

**Planeja Fácil** é uma solução simples e eficiente para gerenciar projetos, tarefas e equipes. Ideal para qualquer mercado que precise de uma gestão de projetos simplificada, permitindo acompanhar o progresso de tarefas e prazos em tempo real, facilitando a colaboração entre membros fixos e temporários da equipe.

## Funcionalidades Principais 🔧

1. **Criação de Projetos**: Permite a criação de múltiplos projetos.
2. **Gerenciamento de Projetos**: Editar, excluir e adicionar equipes e membros a um projeto.
3. **Criação de Tarefas**: Criação e atribuição de tarefas para membros e partes interessadas.
4. **Acompanhamento de Tarefas**: Atualização do status das tarefas em tempo real.
5. **Gerenciamento de Equipes**: Criar equipes e adicionar membros para fácil gerenciamento.
6. **Monitoramento de Prazos**: Verificação dos prazos para cada tarefa.
7. **Dashboard**: Visão geral do progresso dos projetos e tarefas.
8. **Gerenciamento de Permissões**: Diferentes níveis de acesso (gestor, membro, consultores).

## Tecnologias Utilizadas 🛠️

- **Node.js**: Backend da aplicação.
- **Express.js**: Framework web para criação de rotas e gerenciamento de requisições.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar projetos, tarefas e usuários.
- **Mongoose**: ODM para interagir com o MongoDB.
- **JWT**: Autenticação de usuários via tokens.
- **Bcrypt**: Criptografia de senhas.

## Estrutura de Pastas 📂

```bash
planeja-facil/
│
├── config/           # Conexão ao BD
│   ├── db.js         # Configuração para conexão ao BD
│
├── controllers/      # Funções que manipulam a lógica de CRUD (projetos, tarefas, usuários, membros)
│   ├── projectController.js
│   ├── taskCOntroller.js
│   ├── teamController.js
│   ├── userController.js
│
├── Css/              # Estilizações
│   ├── Conteúdo/
│       ├── menuFerrrmantas.css
│       ├── menuProcura.css
│
│   ├── Global/
│       ├── paginaInteira.css
│       ├── reset.css
│       ├── variables.css
│
│   ├── login/
│       ├── cadastro/
│           ├── cadastroLoginMadrugada.css
│           ├── cadastroLoginManha.css
│           ├── cadastroLoginNoite.css
│           ├── cadastroLoginTarde.css
│
│       ├── senha/
│           ├── recuperaSenhaMadrugada.css
│           ├── recuperaSenhaManha.css
│           ├── recuperaSenhaNoite.css
│           ├── recuperaSenhaTarde.css
│
│       ├── telaDeLoginMadrugada.css
│       ├── telaDeLoginManha.css
│       ├── telaDeLoginNoite.css
│       ├── telaDeLoginTarde.css
│
│   ├── telaPrincipal/
│       ├── cabecalho.css
│       ├── Filtros.css
│       ├── menuHamburguer.css
│       ├── tarefas.css
│       ├── telaPrincipal.css
│
├── html/             # Interfaces
├── Imagens/          # Imagens
├── JavaScript/       # Scripts
├── models/           # Modelos de dados do MongoDB (Usuários, Projetos, Tarefas, Equipes)
├── routes/           # Rotas de API para gerenciamento de projetos, tarefas, usuários e equipes
├── config/           # Configurações do banco de dados e variáveis de ambiente
├── middlewares/      # Middlewares de autenticação e permissões
├── .env              # Arquivo de configuração com variáveis de ambiente
├── app.js            # Arquivo principal da aplicação
├── index.html        # Home Page
└── package.json      # Dependências e scripts do Node.js
```

## Pré-requisitos 📝
- **Node.js** (v14.x ou superior)
- **MongoDB** (Local ou em nuvem)

## Instalação ⚙️
### **Siga os passos abaixo para rodar o projeto localmente:**

1. **Clone este repositório:**

````bash
git clone https://github.com/seu-usuario/planeja-facil.git
````
2. **Entre no diretório do projeto:**
````bash
cd planeja-facil
````
3. **Instale as dependências:**
````bash
npm install
````
4. **Configure o banco de dados no arquivo .env. Exemplo de arquivo .env:**
````bash
MONGO_URI=mongodb://localhost:27017/planeja-facil
PORT=5000
JWT_SECRET=sua_chave_secreta
````
5. **Rode a aplicação em modo desenvolvimento:**

````bash
npm run dev
````
6. **Acesse a API no seu navegador ou através do Postman/Insomnia:**

````arduino
http://localhost:5000
````
## Rotas da API 🛣️
### **Projetos**

- **POST /api/projects:** Cria um novo projeto.
- **GET /api/projects:** Lista todos os projetos do usuário.
- **POST /api/projects/:id/team:** Adiciona uma equipe ao projeto.
- **POST /api/projects/:id/member:** Adiciona um membro ao projeto.

### **Tarefas**

- **POST /api/tasks:** Cria uma nova tarefa.
- **GET /api/tasks:** Lista todas as tarefas do usuário.
- **PUT /api/tasks/:id/status:** Atualiza o status de uma tarefa.

### **Equipes**

- **POST /api/teams:** Cria uma nova equipe.
- **GET /api/teams:** Lista todas as equipes.
- **POST /api/teams/:id/member:** Adiciona um membro à equipe.

### **Autenticação**

- **POST /api/auth/register:** Registra um novo usuário.
- **POST /api/auth/login:** Faz login e retorna um token JWT.

# Papéis e Permissões 🔐
* **Gestores de Projeto:** Acesso completo para criar, gerenciar e acompanhar projetos e tarefas.
* **Membros da Equipe:** Acesso limitado para visualizar e atualizar as tarefas atribuídas.
* **Consultores/Partes interessadas:** Acesso restrito a tarefas específicas dentro dos projetos.

## Melhorias Futuras 🚀
* Implementação de notificações para prazos de tarefas.