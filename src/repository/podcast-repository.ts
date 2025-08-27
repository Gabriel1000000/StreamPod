import fs from "fs";
import path from "path";
import  {podcastModel} from "../model/podcasts-model"



const pathData = path.join(__dirname, "../repository/podcasts.json");

export const repositoryPodcast = async (podcastsName?:string): Promise<podcastModel[]> => {
    const language="utf-8";
    const rawData =fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if(podcastsName){
        jsonFile= jsonFile.filter((podcast: podcastModel)=> podcast.podcastsName===podcastsName)
    }

    return jsonFile;
}