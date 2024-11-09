import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree , Router} from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  /**
   *
   */
  constructor(private router: Router) {
   
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let token = localStorage.getItem('token');
    
    if (!token) {
      Swal.fire({
        icon: 'error',
        title: 'No ha iniciado sesión',
        text: 'Por favor inicie sesión para acceder al contenido',
      }).then((resp)=>{
       if(resp.isConfirmed) {
         this.router.navigateByUrl('sign-in');
       }
      });
      return false;
    }
    return true;
  }
  
}
