# 🎙️ Stream Podcast

![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?logo=typescript&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)

## 📌 Descrição
O **Stream Podcast** é uma plataforma escalável (estilo Netflix) para **centralizar e organizar episódios de podcasts** em diferentes categorias.  
O sistema foi construído em **Node.js com TypeScript**, sem frameworks externos, garantindo simplicidade, escalabilidade e clareza no código.  

A aplicação permite:
- Gerenciamento de episódios
- Criação de feeds
- Filtragem por nome de podcast
- Análise de audiência *(futuro)*
- Upload de episódios *(futuro)*  
- Gestão de assinaturas *(futuro)*  
- Análises de audiência *(futuro)*

---

## 🚀 Features
- Listar episódios de podcasts organizados por categorias:
  - Ex.: **Saúde, Fitness, Mentalidade, Humor**
- Filtrar episódios por nome do podcast
- API REST que retorna informações como:
  - Nome do podcast
  - Nome do episódio
  - Capa do episódio
  - Link para assistir
  - Categorias

---

## 🛠️ Como funciona
Os episódios são expostos através de uma **API REST**, no formato JSON.  

Exemplo de retorno da API:

```json
[
  {
    "podcastsName": "flow Podcast",
    "episodio": "MARIO SERGIO CORTELLA - Flow",
    "videoId": "Gd6aSyT2NqE",
    "imgCapa": "https://i.ytimg.com/vi/Gd6aSyT2NqE/maxresdefault.jpg",
    "link": "https://www.youtube.com/live/Gd6aSyT2NqE?si=tOwDGdFXnwDypKx1",
    "categories": ["saúde", "Filosófia"]
  },
  {
    "podcastsName": "flow Podcast",
    "episodio": "RODRIGO MARQUES E CAMBOTA - Flow",
    "videoId": "3fwd1sJD2bk",
    "imgCapa": "https://i.ytimg.com/vi/3fwd1sJD2bk/maxresdefault.jpg",
    "link": "https://www.youtube.com/live/3fwd1sJD2bk?si=iT8bVSGaaD8qGQRB",
    "categories": ["Diversão", "Comédia"]
  }
]
```

---

## ⚙️ Estrutura do projeto
- `app.ts` → Arquivo principal que cria o servidor HTTP e gerencia as rotas
- `server.ts` → Cria a coneção com o servidor
- `controllers/` → Funções responsáveis por tratar as requisições
- `services/` → Lógica de negócio (listar, filtrar episódios etc.)
- `repository/` → Acesso aos dados
- `routes/` → Definição das rotas disponíveis
- `util/` → Utilitários e enums de suporte

---

## 📡 Endpoints

🔹 Listar todos episódios
```http
GET /list
```

🔹 Filtrar episódios por nome
```http
GET /episode?p={podcastName}
```

---

## 🧑‍💻 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) – Ambiente de execução JavaScript no servidor  
- [TypeScript](https://www.typescriptlang.org/) – Superset do JavaScript com tipagem estática  
- [Express-like Router (nativo)] – Sistema de rotas feito sem frameworks, usando Node.js puro  
- [REST API] – Padrão para comunicação cliente-servidor  
- [Nodemon](https://www.npmjs.com/package/nodemon) – (Dev) Hot reload para facilitar o desenvolvimento  
- [TS-Node](https://typestrong.org/ts-node/) – (Dev) Executar arquivos TypeScript diretamente  
- [npm scripts] – Automatização de tarefas



## ▶️ Como rodar o projeto

1 Clone o repositório:
```bash
git clone https://github.com/Gabriel1000000/StreamPod.git
```

2 Diretório:
```bash 
cd stream-podcast
```

## 📜 Licença

Este projeto está sob a licença [MIT](LICENSE)
---




