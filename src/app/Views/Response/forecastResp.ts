import { weather } from './weatherResponse';
import { main } from "./mainDataForecast";

export interface forecast{
    main : main
    weather : weather[]
}