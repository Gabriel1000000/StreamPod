# Stream Podcast

### Descrição
Plataforma escalável estilo netflix, onde possa centralizar diferentes episodios de podcasts separados por categorias tornando, mais facil o gerenciamento, distribuição e análise de podcasts, construída com Node.js e TypeScript. Oferece upload de episódios, criação de feeds, gestão de assinaturas e insights de audiência.

### Dominio
Podcast feitos em videos

### Features

- Lista os episodios dos podcasts em sessão de categorias:
    -[saúde, fitness, mentalidade, humor]
- Filtrar episódios por nome de podcasts

### Como

#### Features:
- Lista os episodios dos podcasts em sessão de categorias:

### Como vou implemtar:
Vou retornar em uma api rest (json) 
o nome do podcast, nome do episódio, imagem de capa e o link do podcast
```js
[
    {
        podcastsName:"flow Podcast",
        episodio:"MARIO SERGIO CORTELLA - Flow",
        videoId:"Gd6aSyT2NqE",
        imgCapa:"https://i.ytimg.com/vi/Gd6aSyT2NqE/maxresdefault.jpg",
        link:"https://www.youtube.com/live/Gd6aSyT2NqE?si=tOwDGdFXnwDypKx1",
        categories:["saúde", "Filosófia"]
    },
    {
        podcastsName:"flow Podcast",
        episodio:"RODRIGO MARQUES E CAMBOTA - Flow",
        videoId:"3fwd1sJD2bk",
        imgCapa:"https://i.ytimg.com/vi/3fwd1sJD2bk/maxresdefault.jpg",
        link:"https://www.youtube.com/live/3fwd1sJD2bk?si=iT8bVSGaaD8qGQRB",
        categories:["Diversão", "Comédia"]
    },
]
```