import { SpearlyApiClient } from "@spearly/sdk-js";

const API_DOMAIN = "api.spearly.com"

export const spearlyApiClient: SpearlyApiClient =  new SpearlyApiClient(API_DOMAIN, import.meta.env.SPEARLY_API_KEY)

export interface BlogPost {
    title: string;
    date: Date;
    description: string;
    body: string;
    alias: string;
}