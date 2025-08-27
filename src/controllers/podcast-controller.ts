import { IncomingMessage, ServerResponse } from "http";
import {serviceListEpisodio} from "../services/lsit-episodio-service"
import {serviceFilterEpisodio} from "../services/filter-episodios-service"
import { StatusCode } from "../util/status-code";
import { ContentType } from "../util/content-type";



export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse)=>{
    const data = await serviceListEpisodio();
    response.writeHead(StatusCode.OK,{"content-type": ContentType.JSON});
    response.end(
        JSON.stringify(data)
    );
}

export const getFilterconsult = async (request: IncomingMessage, response: ServerResponse) => {
    
    const data = await serviceFilterEpisodio(request.url);
    response.writeHead(StatusCode.OK,{"content-type": ContentType.JSON});
    response.end(
        JSON.stringify(data)
    );

}