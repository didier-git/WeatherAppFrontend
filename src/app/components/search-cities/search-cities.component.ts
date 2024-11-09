import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { city } from 'src/app/Views/Response/cityResponse';

@Component({
  selector: 'app-search-cities',
  templateUrl: './search-cities.component.html',
  styleUrls: ['./search-cities.component.css']
})
export class SearchCitiesComponent implements OnInit  {
 
  cities : city[] = [];  
  citiesTemp: city[] = []; 
  listaCopia : city[] = [];

  /**
   *
   */
  constructor(private router:Router) {
   
    
  }
 
 
 
  ngOnInit(): void {


    this.cities= [
      { id: 1, name: "Bogotá", temperature: 14, humidity: 80, description: "Ciudad fría y montañosa." },
      { id: 2, name: "Medellín", temperature: 22, humidity: 70, description: "Ciudad de la eterna primavera." },
      { id: 3, name: "Cali", temperature: 26, humidity: 60, description: "Ciudad cálida, capital de la salsa." },
      { id: 4, name: "Barranquilla", temperature: 30, humidity: 75, description: "Ciudad costera y carnavalesca." },
      { id: 5, name: "Cartagena", temperature: 29, humidity: 85, description: "Ciudad histórica y turística en la costa." },
      { id: 6, name: "Cúcuta", temperature: 28, humidity: 65, description: "Ciudad fronteriza con Venezuela." },
      { id: 7, name: "Bucaramanga", temperature: 23, humidity: 70, description: "Ciudad de parques y montañas." },
      { id: 8, name: "Pereira", temperature: 21, humidity: 75, description: "Ciudad cafetera y cultural." },
      { id: 9, name: "Santa Marta", temperature: 30, humidity: 80, description: "Ciudad turística y cercana al Parque Tayrona." },
      { id: 10, name: "Manizales", temperature: 18, humidity: 78, description: "Ciudad en las montañas, con clima fresco." },
    ];

    this.citiesTemp = this.cities;

    const copiaString = JSON.stringify(this.cities)

    this.listaCopia = JSON.parse(copiaString);
   
  }

  searchCity($event: any){

    const city = $event.target.value;

    this.cities = this.citiesTemp.filter
    (
      (c) =>c.name.toLowerCase().includes(city.toLowerCase())
    );

    if(this.cities.length == 0)
    {
        this.cities = this.listaCopia;
    }

}

showWeatherDetail(name : string){
  this.router.navigateByUrl(`weather-detail?name=${name}`);  // Navigate to weather details page with selected city name
}

 
}
