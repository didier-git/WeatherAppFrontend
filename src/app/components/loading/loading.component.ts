import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingServiceService } from 'src/app/services/loading-service.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit, OnDestroy {

  subcripcion !: Subscription
  isLoading !:boolean 
  constructor(private serviceLoading : LoadingServiceService ) {
  
  }
   ngOnInit(): void {
     this.subcripcion = this.serviceLoading.isLoading.subscribe(next=> this.isLoading = next);
   }
  
   ngOnDestroy(): void {
       this.subcripcion.unsubscribe();
   }

}
