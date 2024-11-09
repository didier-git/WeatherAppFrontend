import { city } from './../../Views/Response/cityResponse';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { cityDetail } from 'src/app/Views/Response/cityDetail';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.css']
})
export class WeatherDetailComponent implements OnInit {

  city: string = '';
  cityDetail: cityDetail ;

  constructor(private dataService : DataServiceService, private rout : ActivatedRoute) {
    this.cityDetail = {
      country: '',
      id : '',
      name: '',
      population: 0,
      sunrise: 0,
      sunset: 0,
      timezone: 0,
      list: []
    };
   
 
  }
  ngOnInit(): void {

     this.city = this.rout.snapshot.queryParams['name'];
     
    this.dataService.getWeatherByCity(this.city).subscribe({
      next: (data:any) => {
        console.log(data);
        this.cityDetail = data.city;
        this.cityDetail.list = data.list;

        console.log(this.cityDetail , 'Esta es la data en el objeto');
    
      },
      error: (error) => {
        console.error(error);
      }
    })
    
  }

  addCityToFavorite(city: any){
    // Add city to favorite list
    // This will depend on the structure of your favorite list
    // You might want to use a service to manage your favorite list
    // Or you could use local storage or a database to persist your favorite list
    console.log(city, 'Agregando a favoritos'  );
    this.dataService.addCityFavorite(city).subscribe({
      next: (data:any) => {
        console.log(data);
        Swal.fire({
          icon:'success',
          title: 'Agregado a favoritos',
          text: 'La ciudad'+ city +'ha sido agregada a tus favoritos',
        });
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          icon:'error',
          title: 'Error',
          text: 'Ha ocurriod un error al agregar la ciudad a tus favoritos',
        });
      }
    });
    

  }

  fahrenheitToCelsius(fahrenheit: number): number {
    return Math.floor(fahrenheit -  273.15);
  }


}


