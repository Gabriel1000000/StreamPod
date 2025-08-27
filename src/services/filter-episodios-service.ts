import {repositoryPodcast} from "../repository/podcast-repository";
import {PodcastTranferModel} from "../model/PodcastTranferModel"
import { StatusCode } from "../util/status-code";


export const serviceFilterEpisodio = async (podcastsName: string | undefined):Promise<PodcastTranferModel> =>{

    // Defini a interface de retorno
    let respnseFormat: PodcastTranferModel = {
        statusCode:0,
        body:[],
    }

    // Busca os dados
    const queryString = podcastsName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    // Verifica se tem conteudo
    if(data.length !== 0){
        respnseFormat.statusCode = StatusCode.OK;
    } else{
        respnseFormat.statusCode = StatusCode.NO_CONTENT;
    }
    
    respnseFormat.body = data;

    return respnseFormat;
}