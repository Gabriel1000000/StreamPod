import { IncomingMessage, ServerResponse } from "http";
import {serviceListEpisodio} from "../services/lsit-episodio-service"
import {serviceFilterEpisodio} from "../services/filter-episodios-service"
import { StatusCode } from "../util/status-code";
import { ContentType } from "../util/content-type";
import { PodcastTranferModel } from "../model/PodcastTranferModel";



export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse)=>{
    const data = await serviceListEpisodio();
    response.writeHead(StatusCode.OK,{"content-type": ContentType.JSON});
    response.write(JSON.stringify(data.body));
    response.end();
}

export const getFilterconsult = async (request: IncomingMessage, response: ServerResponse)=> {
    
    const data: PodcastTranferModel = await serviceFilterEpisodio(request.url);
    response.writeHead(data.statusCode,{"content-type": ContentType.JSON});
    response.write(JSON.stringify(data.body));
    response.end();

}