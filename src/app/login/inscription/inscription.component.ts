import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from '@angular/router';
import { TokenStorage } from '../../service/token.storage';
import {Candidat} from "../../models/candidat.models";
import {Role} from "../../models/role.model";
import {UploadService} from "../../service/upload.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {MatDatepickerModule} from '@angular/material/datepicker';


@Component({
  selector: '',
  templateUrl: './inscription.component.html'
})
export class InscriptionComponent implements  OnInit{

  myDateValue: Date;
  selectedCv: FileList;
  currentFileUploadCv: File = null;
  progressCv: { percentageCv: number } = { percentageCv: 0 }
  selectedPhoto: FileList;
  currentFileUploadPhoto: File = null;
  progressPhoto: { percentagePhoto: number } = { percentagePhoto: 0 };
  message: boolean = true;
  title = 'inscription';
  candidatToAdd : Candidat = new Candidat();
  private credential = {'username': '', 'password' : ''};
  username: string;
  password: string;
  user: any;

  ngOnInit(): void {
    this.myDateValue = new Date();
  }

  constructor( private authService: AuthService, private router: Router, private token: TokenStorage, private uploadService: UploadService) {
    this.candidatToAdd.role= new Role();
    this.candidatToAdd.role.id="3";
    this.candidatToAdd.role.role="ROLE_CANDIDAT";
  }

  login(): void {
    this.candidatToAdd.dateNaissance=this.myDateValue;
    this.uploadFileCv();
    this.uploadFilePhoto();
    this.authService.inscription(this.candidatToAdd).subscribe(
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
            this.router.navigate(['/emploi']);
          }
        );
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

  onDateChange(newDate: Date) {
    console.log(newDate);
  }

  mailUnique(username){
    this.authService.mailExist(username).subscribe(data=>{
      this.message=data;
    })
  }
}
