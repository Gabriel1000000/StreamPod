import { podcastModel } from "./podcasts-model";

export interface PodcastTranferModel {
    statusCode: number;
    body: podcastModel[];
}