import fs from "fs";
import path from "path";
import  {podcastModel} from "../model/podcasts-model"



const pathData = path.join(__dirname, "../repository/podcasts.json");

export const repositoryPodcast = async (podcastsName?:string): Promise<podcastModel[]> => {

    const rawData =fs.readFileSync(pathData, "utf-8");
    let jsonFile = JSON.parse(rawData);

    if(podcastsName){
        jsonFile= jsonFile.filter((podcast: podcastModel)=> podcast.podcastsName===podcastsName)
    }

    return jsonFile;
}