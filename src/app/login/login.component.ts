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
      },
      error => {
        console.log(error);
      },
      () => {
        this.authService.getUserAllData().subscribe(
          data => {
            this.user = data;
            localStorage.setItem("ROLE", this.user.role.role);
            localStorage.setItem("Id", this.user.id);
            localStorage.setItem("Nom", this.user.nom);
            localStorage.setItem("Prenom", this.user.prenom);
            localStorage.setItem("Email", this.user.email);
            localStorage.setItem("DateNaissance", this.user.dateNaissance);
            localStorage.setItem("Photo", this.user.photo);
            if(this.user.role.role == "ROLE_ADMIN" || this.user.role.role == "ROLE_RECRUTEUR" ) {
              this.router.navigate(['/pages/listeOffre']);
            }
            else if (this.user.role.role == "ROLE_CANDIDAT"){
              this.router.navigate(['/emploi']);
            }else {
                this.router.navigate(['/login']);
            }
          }
        );
      }
    );

  }
}
