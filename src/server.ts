import * as http from "http";
import {getListEpisodes, getFilterconsult} from "./controllers/podcast-controller";

const server = http.createServer(
    async (request: http.IncomingMessage , response: http.ServerResponse)=>{

        const [baseUrl, queryString] = request.url?.split("?") ?? [" ", " "];
        console.log(`baseUrl:${baseUrl}, queryString:${queryString}`)

        if(request.method==="GET" && baseUrl==="/api/list"){
            await getListEpisodes(request, response);
        }
        if(request.method==="GET" && baseUrl==="/api/episode"){
            await getFilterconsult(request, response);
        }
    } 
);

const port=process.env.PORT;
server.listen(port, ()=>{
    console.log(`Servidor iniciado na porta ${port}`);
})