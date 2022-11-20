import { ITopic } from "./topics";
export interface INews {
    authors: string[];
    banner_image: string;
    category_within_source: string;
    overall_sentiment_label: string;
    overall_sentiment_score: number;
    source: string;
    source_domain: string;
    summary: string;
    ticker_sentiment: string;
    time_published: string;
    title: string;
    topics: ITopic[];
    url: string;
}