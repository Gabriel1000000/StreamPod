import {repositoryPodcast} from "../repository/podcast-repository";
import {podcastModel} from "../model/podcasts-model"
import { IncomingMessage } from "http";

export const serviceFilterEpisodio = async (podcastsName: string | undefined)=>{
    const queryString = podcastsName?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);
    return data;
}