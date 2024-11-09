import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private apiurl : string = environment.apiUrl
 // headers : HttpHeaders;
  constructor(private http: HttpClient) {
    //  this.headers= new HttpHeaders();
    //  this.headers = this.headers.set('Authorization', `Bearer ${localStorage.getItem('token')}`);
   }


   getAllCities(){
     return this.http.get(`${this.apiurl}/cities`);
   }

   getWeatherByCity(city: string){
     return this.http.get(`${this.apiurl}/api/search-cities?q=${city}`);
   }

   addCityFavorite(city: string){
    return this.http.post(`${this.apiurl}/api/ciudades/favoritas`, {name: city});
   }

   getListCitiesFavorite(){
     return this.http.get(`${this.apiurl}/api/ciudades/favoritas`);
   }



}
