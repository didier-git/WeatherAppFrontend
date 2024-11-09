import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { register } from 'src/app/Views/Request/registerRequest';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

    form!: FormGroup;
    request : register

    constructor(private formbuilder: FormBuilder, private service : AuthServiceService, private router: Router) {
      this.request = 
      {
        name: '',
        email: '',
        password: ''
      }
    }
    ngOnInit(): void {
      this.form = this.initForm();
    } 


    initForm(){
    return this.formbuilder.group({
        name: ['',Validators.required],
        email: ['',Validators.email],
        password: ['', [Validators.minLength(8),Validators.required]]
      });
    }

    onSubmit($event: any): void {

      if(this.form.invalid){
        Swal.fire({
          icon: 'error',
          title: 'Error en el formulario',
          text: 'Por favor, verifica que todos los campos estén completos y válidos',
        })
        return;
      }

      this.request = this.form.value;
      this.service.register(this.request).subscribe({
        next:(resp:any)=>{
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Te has registrado correctamente',
          }).then(resp =>{
            if(resp.isConfirmed == true){
                this.router.navigateByUrl('sign-in');
            }
          })
        },
        error:(error:any)=>{
          Swal.fire({
            icon: 'error',
            title: 'Error al registrar',
            text: 'Hubo un error al registrar, intente nuevamente',
          })
        }
      });
    }



    validateField(fieldName: string,error: string){
        return (this.form.get(fieldName)?.hasError('required') && this.form.get(fieldName)?.dirty) || (this.form.get(fieldName)?.touched && !this.form.get(fieldName)?.value) ;
    }
}
