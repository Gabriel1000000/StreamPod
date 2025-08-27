import * as http from "http";
import {getListEpisodes, getFilterconsult} from "./controllers/podcast-controller";
import {Routes} from "./routes/Route";
import {HttpMethod} from "./util/http-Method";

export const app =  async (request: http.IncomingMessage , response: http.ServerResponse)=>{

        const [baseUrl, queryString] = request.url?.split("?") ?? [" ", " "];
        console.log(`baseUrl:${baseUrl}, queryString:${queryString}`)

        if(request.method===HttpMethod.GET && baseUrl===Routes.LIST){
            await getListEpisodes(request, response);
        }
        if(request.method===HttpMethod.GET && baseUrl===Routes.EPISODE){
            await getFilterconsult(request, response);
        }
    } 