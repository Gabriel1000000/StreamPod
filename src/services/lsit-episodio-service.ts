import { repositoryPodcast } from "../repository/podcast-repository";

export const serviceListEpisodio = async ()=>{

    const data = await repositoryPodcast()

    return data;

};