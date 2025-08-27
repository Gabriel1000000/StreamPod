import { IncomingMessage, ServerResponse } from "http";
import {serviceListEpisodio} from "../services/lsit-episodio-service"
import {serviceFilterEpisodio} from "../services/filter-episodios-service"


export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse)=>{
    const data = await serviceListEpisodio();
    response.writeHead(200,{"content-type":"application/json"});
    response.end(
        JSON.stringify(data)
    );
}

export const getFilterconsult = async (request: IncomingMessage, response: ServerResponse) => {
    const queryString = request.url?.split("?p=")[1] || "";
    const data = await serviceFilterEpisodio(queryString);
    response.writeHead(200,{"content-type":"application/json"});
    response.end(
        JSON.stringify(data)
    );

}