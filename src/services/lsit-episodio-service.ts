import { PodcastTranferModel } from "../model/PodcastTranferModel";
import { repositoryPodcast } from "../repository/podcast-repository";
import { StatusCode } from "../util/status-code";

export const serviceListEpisodio = async (): Promise<PodcastTranferModel>=>{
    
    // Defini a interface de retorno
    let respnseFormat: PodcastTranferModel = {
        statusCode:0,
        body:[],
    };

    const data = await repositoryPodcast();
    
    if(data.length !== 0){
        respnseFormat.statusCode = StatusCode.OK;
    }else{
        respnseFormat.statusCode = StatusCode.NO_CONTENT;
    }
    
    respnseFormat.body = data;

    return respnseFormat;

};