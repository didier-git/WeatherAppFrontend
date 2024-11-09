import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingServiceService {
  
  isLoading : BehaviorSubject<boolean>
  constructor() {
    this.isLoading = new BehaviorSubject<boolean>(false);
   }
}
