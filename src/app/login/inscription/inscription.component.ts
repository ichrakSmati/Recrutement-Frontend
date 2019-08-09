import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from '@angular/router';
import { TokenStorage } from '../../service/token.storage';
import {Candidat} from "../../models/candidat.model";
import {Role} from "../../models/role.model";

@Component({
  selector: '',
  templateUrl: './inscription.component.html'
})
export class InscriptionComponent {
  title = 'inscription';
  candidatToAdd : Candidat = new Candidat();
  date = new Date();
  private credential = {'username': '', 'password' : ''};
  username: string;
  password: string;
  user: any;
  constructor( private authService: AuthService, private router: Router, private token: TokenStorage) {
    this.candidatToAdd.role= new Role();
    this.candidatToAdd.role.id="3";
    this.candidatToAdd.role.role="ROLE_CANDIDAT";
  }

  login(): void {
    this.candidatToAdd.dateNaissance=this.date;

    console.log(this.candidatToAdd);
    this.authService.inscription(this.candidatToAdd).subscribe(
      data => {
        this.token.saveToken(data.token);
        console.log(this.token.getToken());
        console.log("send credential operation");
      },
      error => {
        console.log(error);

      },
      () => {
        sessionStorage.setItem("Nom", this.candidatToAdd.nom);
        sessionStorage.setItem("Prenom", this.candidatToAdd.prenom);
        sessionStorage.setItem("Email", this.candidatToAdd.email);
        //sessionStorage.setItem("DateNaissance", this.candidatToAdd.dateNaissance);
        sessionStorage.setItem("Photo", this.candidatToAdd.photo);
        sessionStorage.setItem("ROLE", this.candidatToAdd.role.role)
        this.router.navigate(['/emploi']);

      }
    );

  }
}
