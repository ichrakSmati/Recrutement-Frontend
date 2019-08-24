import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from '@angular/router';
import { TokenStorage } from '../../service/token.storage';
import {Candidat} from "../../models/candidat.models";
import {Role} from "../../models/role.model";
import {UploadService} from "../../service/upload.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";

@Component({
  selector: '',
  templateUrl: './inscription.component.html'
})
export class InscriptionComponent {

  selectedCv: FileList;
  currentFileUploadCv: File = null;
  progressCv: { percentageCv: number } = { percentageCv: 0 }

  selectedPhoto: FileList;
  currentFileUploadPhoto: File = null;
  progressPhoto: { percentagePhoto: number } = { percentagePhoto: 0 };

  title = 'inscription';
  candidatToAdd : Candidat = new Candidat();
  date = new Date();
  private credential = {'username': '', 'password' : ''};
  username: string;
  password: string;
  user: any;

  constructor( private authService: AuthService, private router: Router, private token: TokenStorage, private uploadService: UploadService) {
    this.candidatToAdd.role= new Role();
    this.candidatToAdd.role.id="3";
    this.candidatToAdd.role.role="ROLE_CANDIDAT";
  }

  login(): void {
    this.candidatToAdd.dateNaissance=this.date;
    this.uploadFileCv();
    this.uploadFilePhoto();
    console.log(this.candidatToAdd);
    /*die function*/ //throw new Error("my error message");
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
        localStorage.setItem("Nom", this.candidatToAdd.nom);
        localStorage.setItem("Prenom", this.candidatToAdd.prenom);
        localStorage.setItem("Email", this.candidatToAdd.email);
        //sessionStorage.setItem("DateNaissance", this.candidatToAdd.dateNaissance);
        localStorage.setItem("Photo", this.candidatToAdd.photo);
        localStorage.setItem("ROLE", this.candidatToAdd.role.role)
        this.router.navigate(['/emploi']);

      }
    );
  }

  uploadFileCv() {
    this.progressCv.percentageCv = 0;
    this.currentFileUploadCv = this.selectedCv.item(0);
    //var ext = this.currentFileUploadCv.name.substr(this.currentFileUploadCv.name.lastIndexOf('.') + 1);
    //this.currentFileUploadCv.name=Math.random().toString(36).slice(2)+"ext";
    console.log(this.currentFileUploadCv);
    this.uploadService.pushFileToStorage(this.currentFileUploadCv).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progressCv.percentageCv = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.candidatToAdd.cv = this.currentFileUploadCv.name;
  }

  uploadFilePhoto(){
    this.progressPhoto.percentagePhoto = 0;
    this.currentFileUploadPhoto = this.selectedPhoto.item(0);
    console.log(this.currentFileUploadPhoto);
    this.uploadService.pushFileToStorage(this.currentFileUploadPhoto).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progressPhoto.percentagePhoto = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.candidatToAdd.photo= this.currentFileUploadPhoto.name;
    this.currentFileUploadPhoto= undefined;

  }

  selectCv(event) {
    this.selectedCv = event.target.files;
  }

  selectPhoto(event) {
    this.selectedPhoto = event.target.files;
  }
}
