import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { Authenticate } from 'src/app/Views/Request/authenticateRequest';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  form!: FormGroup;
  request : Authenticate
  
  constructor(private formbuilder: FormBuilder, private service : AuthServiceService, private router : Router) {
   this.request = {
    email: '',
    password: ''
   }
  }
  ngOnInit(): void {
    this.form = this.initForm();
  } 
  
  
    initForm(){
    return this.formbuilder.group({
        email: ['', Validators.required, Validators.email],
        password: ['', [Validators.required,Validators.minLength(8)]],
      });
    }
  
  
   
    onSubmit($event: any): void {
      this.request = this.form.value;
  
      this.service.authenticate(this.request).subscribe({
        next:(resp:any)=>{
          localStorage.setItem('token', resp.token);
          this.router.navigateByUrl('/');
        },
        error:(error:any)=>{

          console.log(error,'Estes es el error');
          
          Swal.fire({
            icon: 'error',
            title: 'Error al intentar iniciar sesión',
            text: 'Hubo al intentar iniciar sesión, intente nuevamente',
          }) 
        }
      });
      
    }

    validateField(fieldName: string,error: string){
      return (this.form.get(fieldName)?.hasError('required') && this.form.get(fieldName)?.dirty) || (this.form.get(fieldName)?.touched && !this.form.get(fieldName)?.value) ;
  }
}
