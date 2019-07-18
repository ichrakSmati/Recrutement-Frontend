import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {}

    canActivate() {

      if (sessionStorage.getItem('ROLE') === 'ROLE_ADMIN' || sessionStorage.getItem('ROLE') === 'ROLE_RECRUTEUR') {
          // this.router.navigate(['/users']);
        return true;
      }else if(sessionStorage.getItem('ROLE') === 'ROLE_CANDIDAT'){
        return true
      }else {
        this.router.navigate(['/singin']);
        console.log('unauthorized');
        return false;

      }

    }
  }
