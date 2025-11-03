# ⚡ CS — Sistema de Gerenciamento Elétrico

Sistema web desenvolvido com **Vue.js 3** e **Express.js**, voltado para empresas do setor elétrico.  
O projeto possui uma interface pública para apresentação de **serviços**, **equipamentos**, **projetos** e **manutenção**, além de um **painel administrativo** para gerenciamento do conteúdo e configurações do sistema.

---
Você pode acessar o projeto rodando aqui: [[CS - Sistema Elétrico](https://seu-link-aqui.com](https://costa-simoes-website.netlify.app/))

## 📋 Descrição

O **CS** é um portal moderno e responsivo, criado para facilitar a administração de informações técnicas e comerciais de uma empresa elétrica.  
A aplicação é dividida em duas partes principais:

- **Área pública:** apresenta os serviços, projetos, equipamentos e soluções de manutenção.  
- **Painel administrativo:** gerencia todo o conteúdo e as configurações do site, com comunicação via API Express e banco de dados MongoDB.

---

## 🧱 Tecnologias Utilizadas

### Front-end
- [Vue.js 3](https://vuejs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Vue Router](https://router.vuejs.org/)
- [Axios](https://axios-http.com/)
- [Bootstrap 5](https://getbootstrap.com/)
- [Vite](https://vitejs.dev/)
- [Vite Plugin Vue DevTools](https://devtools.vuejs.org/)

### Back-end
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [CORS](https://github.com/expressjs/cors)
- [dotenv](https://github.com/motdotla/dotenv)

---

## 🚀 Funcionalidades

- Página de **Serviços**
- Página de **Equipamentos**
- Página de **Projetos**
- Página de **Manutenção**
- **Painel administrativo** para CRUD completo dos conteúdos
- **Gerenciamento de configurações** do aplicativo
- Integração com **MongoDB** via Mongoose
- **API RESTful** desenvolvida em Express.js

---

## 🛠️ Instalação e Execução

### 🔹 Pré-requisitos
- Node.js v18+  
- npm ou yarn  
- MongoDB em execução local ou remoto  

### 🔹 Passos

```bash
# Clone o repositório
git clone https://github.com/seuusuario/cs.git

# Acesse o diretório
cd cs

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas credenciais

# Rode o front-end (Vue)
npm run dev

# Rode o back-end (Express)
npm run server


cs/
├── backend/
│   ├── server.js
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── views/
│   │   ├── router/
│   │   └── store/
│   └── vite.config.js
├── package.json
└── README.md

## 👨‍💻 Autor

**Igor W. A. Silva**  
Desenvolvedor Full Stack  
📧 [igor_wa_silva@outlook.com] 
🌐 [https://www.linkedin.com/in/igorwasilva/]
