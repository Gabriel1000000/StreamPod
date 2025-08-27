import {repositoryPodcast} from "../repository/podcast-repository";
import {podcastModel} from "../model/podcasts-model"

export const serviceFilterEpisodio = async (podcastsName:string)=>{
    const data = await repositoryPodcast(podcastsName);
    return data;
}