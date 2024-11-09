import { city } from './../../Views/Response/cityResponse';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from 'src/app/services/data-service.service';
import { LoadingServiceService } from 'src/app/services/loading-service.service';
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
  IsFavorite:number;

  constructor(private dataService : DataServiceService, private rout : ActivatedRoute, private loading: LoadingServiceService){
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

    this.IsFavorite = 0; // Default to not favorite
   
 
  }
  ngOnInit(): void {

     this.city = this.rout.snapshot.queryParams['name'];
     if(!this.rout.snapshot.queryParams['favorite']){
      this.IsFavorite = Number(this.rout.snapshot.queryParams['favorite']);
     }
     

     this.loading.isLoading.next(true);
    this.dataService.getWeatherByCity(this.city).subscribe({
      next: (data:any) => {
        console.log(data);
        this.cityDetail = data.city;
        this.cityDetail.list = data.list;
        this.loading.isLoading.next(false);
      },
      error: (error) => {
        console.error(error);
        this.loading.isLoading.next(false);
      }
    })
    
  }

  addCityToFavorite(city: any){
    
    this.loading.isLoading.next(true);
    this.dataService.addCityFavorite(city).subscribe({
      next: (data:any) => {
        console.log(data);
        Swal.fire({
          icon:'success',
          title: 'Agregado a favoritos',
          text: 'La ciudad'+ city +'ha sido agregada a tus favoritos',
          customClass: {
            confirmButton: 'bg-red-600 text-white px-4 py-2 rounded',
          },
          buttonsStyling: false
        });
        this.loading.isLoading.next(false);
      },
      error: (error) => {
        console.error(error);
        Swal.fire({
          icon:'error',
          title: 'Error',
          text: 'Ha ocurrido un error al agregar la ciudad a tus favoritos',
          customClass: {
            confirmButton: 'bg-red-600 text-white px-4 py-2 rounded',
          },
          buttonsStyling: false
        });
        this.loading.isLoading.next(false);
      }
    });
    

  }

  fahrenheitToCelsius(fahrenheit: number): number {
    return Math.floor(fahrenheit -  273.15);
  }


}


