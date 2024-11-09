import { forecast } from "./forecastResp";

export interface cityDetail{
    country: string;
    id : string;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
    list: forecast[]
    
}