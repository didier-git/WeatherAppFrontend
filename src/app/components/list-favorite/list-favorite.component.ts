import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataServiceService } from 'src/app/services/data-service.service';
import { LoadingServiceService } from 'src/app/services/loading-service.service';
import { cityFavorite } from 'src/app/Views/Response/cityFavoriteResponse';
import { city } from 'src/app/Views/Response/cityResponse';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-favorite',
  templateUrl: './list-favorite.component.html',
  styleUrls: ['./list-favorite.component.css']
})
export class ListFavoriteComponent implements OnInit  {

 cities :cityFavorite[]
 

 constructor(private service : DataServiceService, private router:Router, private loading : LoadingServiceService) { 
 
  this.cities = [];

  
 }
  ngOnInit(): void {

    this.loading.isLoading.next(true);

    this.service.getListCitiesFavorite().subscribe({
      next:(resp:any) => {
        this.cities = resp.favorites;
        console.log(resp.favorites);
        this.loading.isLoading.next(false);
      },
      error: (error) => {
        this.loading.isLoading.next(false);
      }
    });
  }
  showWeatherDetail(name : string){
    this.router.navigateByUrl(`weather-detail?name=${name}&favorite=${1}`);  // Navigate to weather details page with selected city name
  }
  deleteCity(id: number){

    Swal.fire({
      title: 'Está seguro?',
      text: '¿Desea eliminar la ciudad de la lista de favoritos?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      customClass: {
        confirmButton: 'bg-red-600 text-white px-4 py-2 rounded',
        cancelButton: 'bg-gray-300 text-black px-4 py-2 rounded'
      },
      buttonsStyling: false
    }).then((result)=> {

      if(result.isConfirmed) {
        this.loading.isLoading.next(true);
        this.service.deleteCityFavorite(id).subscribe({
          next:(resp:any) => {
            Swal.fire({
              icon:'success',
              title: 'Eliminación exitosa',
              text: 'La ciudad fue eliminada correctamente de la lista de favoritos',
              customClass: {
                confirmButton: 'bg-green-600  text-white px-4 py-2 rounded',
              },
              buttonsStyling: false
            }).then((result)=>{
                 if(result.isConfirmed) {
                   this.ngOnInit();
                 }

            });
            this.loading.isLoading.next(false);
          },
          error: (error) => {
            Swal.fire({
              icon:'error',
              title: 'Error',
              text: 'Ha ocurrido un error al eliminar la ciudad de la lista de favoritos',
              customClass: {
                confirmButton: 'bg-green-600  text-white px-4 py-2 rounded',
              },
              buttonsStyling: false
            });
            this.loading.isLoading.next(false);
          }
        })
      }
    })

    
    
  }
}
