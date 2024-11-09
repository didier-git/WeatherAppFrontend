import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LoadingServiceService } from 'src/app/services/loading-service.service';
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

    constructor(private formbuilder: FormBuilder, private service : AuthServiceService, private router: Router, private loading: LoadingServiceService) {
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
      this.loading.isLoading.next(true);
      this.request = this.form.value;
      this.service.register(this.request).subscribe({
        next:(resp:any)=>{
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'Te has registrado correctamente',
            customClass: {
              confirmButton: 'bg-green-600 text-white px-4 py-2 rounded',
            },
            buttonsStyling: false
          }).then(resp =>{
            if(resp.isConfirmed == true){
                this.router.navigateByUrl('sign-in');
            }
          })
          this.loading.isLoading.next(false);
        },
        error:(error:any)=>{
          Swal.fire({
            icon: 'error',
            title: 'Error al registrar',
            text: 'Hubo un error al registrar, intente nuevamente',
          })
          this.loading.isLoading.next(false);
        }
      });
    }



    validateField(fieldName: string,error: string){
        return (this.form.get(fieldName)?.hasError('required') && this.form.get(fieldName)?.dirty) || (this.form.get(fieldName)?.touched && !this.form.get(fieldName)?.value) ;
    }
}
