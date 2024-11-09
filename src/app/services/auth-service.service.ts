import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { register } from '../Views/Request/registerRequest';
import { Authenticate } from '../Views/Request/authenticateRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiurl : string = environment.apiUrl
  constructor(private http: HttpClient) {

   }


   register(register : register){
     return this.http.post(`${this.apiurl}/api/users/register`,register);
   }

   authenticate(register : Authenticate){
    return this.http.post(`${this.apiurl}/api/users/login`,register);
  }

  singOut(){
    return this.http.post(`${this.apiurl}/api/users/logout`,{});
  }

  
}
