import { IncomingMessage, ServerResponse } from "http";


export const getListEpisodes = (request: IncomingMessage, response: ServerResponse)=>{
    response.writeHead(200,{"content-type":"application/json"});
    response.end(
        JSON.stringify({
            name:"Gabriel"
        })
    )
}