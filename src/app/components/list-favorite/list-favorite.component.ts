import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { cityFavorite } from 'src/app/Views/Response/cityFavoriteResponse';
import { city } from 'src/app/Views/Response/cityResponse';

@Component({
  selector: 'app-list-favorite',
  templateUrl: './list-favorite.component.html',
  styleUrls: ['./list-favorite.component.css']
})
export class ListFavoriteComponent implements OnInit  {

 cities :cityFavorite[]

 constructor(private service : DataServiceService, private router:Router) { 
 
  this.cities = [];

  // this.cities= [
  //   { id: 1, name: "Bogotá", temperature: 14, humidity: 80, description: "Ciudad fría y montañosa." },
  //   { id: 2, name: "Medellín", temperature: 22, humidity: 70, description: "Ciudad de la eterna primavera." },
  //   { id: 3, name: "Cali", temperature: 26, humidity: 60, description: "Ciudad cálida, capital de la salsa." },
  //   { id: 4, name: "Barranquilla", temperature: 30, humidity: 75, description: "Ciudad costera y carnavalesca." },
  //   { id: 5, name: "Cartagena", temperature: 29, humidity: 85, description: "Ciudad histórica y turística en la costa." },
  //   { id: 6, name: "Cúcuta", temperature: 28, humidity: 65, description: "Ciudad fronteriza con Venezuela." },
  //   { id: 7, name: "Bucaramanga", temperature: 23, humidity: 70, description: "Ciudad de parques y montañas." },
  //   { id: 8, name: "Pereira", temperature: 21, humidity: 75, description: "Ciudad cafetera y cultural." },
  //   { id: 9, name: "Santa Marta", temperature: 30, humidity: 80, description: "Ciudad turística y cercana al Parque Tayrona." },
  //   { id: 10, name: "Manizales", temperature: 18, humidity: 78, description: "Ciudad en las montañas, con clima fresco." },
  // ];
 }
  ngOnInit(): void {

    this.service.getListCitiesFavorite().subscribe({
      next:(resp:any) => {
        this.cities = resp.favorites;
        console.log(resp.favorites);
        
      },
      error: (error) => {
        console.error('Error retrieving favorite cities: ', error);
      }

    });
  

  }

  showWeatherDetail(name : string){
    this.router.navigateByUrl(`weather-detail?name=${name}`);  // Navigate to weather details page with selected city name
  }
}
