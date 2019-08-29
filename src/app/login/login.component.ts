import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from '@angular/router';
import { TokenStorage } from '../service/token.storage';

@Component({
  selector: '',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  title = 'recrutement';

  private credential = {'username': '', 'password' : ''};
  username: string;
  password: string;
  user: any;
  constructor( private authService: AuthService, private router: Router, private token: TokenStorage) { }

  login(): void {

    this.authService.sendCredential(this.username, this.password).subscribe(
      data => {
        this.token.saveToken(data.token);
        console.log(this.token.getToken());
        console.log("send credential operation");
      },
      error => {
        console.log(error);

      },
      () => {
        this.authService.getUserAllData().subscribe(
          data => {
            this.user = data;
            console.log("user id auth service :"+this.user.id);
            //sessionStorage.setItem("ROLE", this.user.role.role);
            localStorage.setItem("Id", this.user.id);
            console.log("login.ts " + localStorage.getItem("Id"));
            sessionStorage.setItem("Nom", this.user.nom);
            sessionStorage.setItem("Prenom", this.user.prenom);
            sessionStorage.setItem("Email", this.user.email);
            sessionStorage.setItem("DateNaissance", this.user.dateNaissance);
            sessionStorage.setItem("Photo", this.user.photo);
            console.log(sessionStorage.getItem("ROLE"));
            if(this.user.role.role == "ROLE_ADMIN" || this.user.role.role == "ROLE_RECRUTEUR" ) {
              this.router.navigate(['/pages/dashboard']);
            }
            else if (this.user.role.role == "ROLE_CANDIDAT"){
              this.router.navigate(['/emploi']);
            }else {
                this.router.navigate(['/signin']);
            }

          }
        );
      }
    );

  }
}
