import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { city } from 'src/app/Views/Response/cityResponse';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 

  IsLogued : boolean = false;



 constructor(private router : Router, private authService : AuthServiceService){
  
  }
  ngOnInit(): void {
   
    this.IsLogued = localStorage.getItem('token')? true : false;

  }


  signOut(){
    this.authService.singOut().subscribe({
      next: () => {
    
        this.router.navigateByUrl('sign-in');
        localStorage.removeItem('token');
        this.IsLogued = false;
      },
      error: (err) => {
        console.error('Error: ', err);
      }
    });
   
  }


}
