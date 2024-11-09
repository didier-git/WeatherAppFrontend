import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { city } from 'src/app/Views/Response/cityResponse';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit { 

  IsLogued : boolean = false;



 constructor(private router : Router) {
  
  }
  ngOnInit(): void {
   


  }


}
