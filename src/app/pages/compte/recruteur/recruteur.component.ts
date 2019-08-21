import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Recruteur} from "../../../models/recruteur.model";
import {CompteService} from "../../../service/compte.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {UploadService} from "../../../service/upload.service";
import {Role} from "../../../models/role.model";



@Component({
  selector: '',
  templateUrl: './recruteur.component.html',
})
export class RecruteurComponent implements  OnInit {

  recruteurs: Recruteur[];
  date = new Date();
  recToAdd : Recruteur = new  Recruteur();
  selectedFiles: FileList;
  currentFileUpload: File = null;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private router: Router, private compteService: CompteService, private uploadService: UploadService ,private route: ActivatedRoute) {
    this.recToAdd.role= new Role();
    this.recToAdd.role.id="2";
    this.recToAdd.role.role="ROLE_RECRUTEUR";
  }

  ngOnInit(): void {
    this.compteService.getRecruteurs()
      .subscribe(data => {
        this.recruteurs = data;
      });
  }

  createRecruteur(){
    this.uploadImage();
    this.recToAdd.pass="123";
    this.recToAdd.dateNaissance=this.date;
    this.recToAdd.photo=this.currentFileUpload.name;
    this.recToAdd.etat=false;
    console.log(this.recToAdd);
    this.compteService.creatRecruteur(this.recToAdd)
      .subscribe(data => {
        this.router.navigate(['/pages/recruteurs']);
    });
  }

  editRecruteur(recruteur){
    this.uploadImage();
    recruteur.photo=this.currentFileUpload.name;
      recruteur.dateNaissance=this.date;
      this.compteService.editRecruteur(recruteur)
        .subscribe(data => {
          this.router.navigate(['/pages/recruteurs']);
      });
    }

  statusRecruteur(recruteur){
    console.log("test1 : "+ recruteur.etat);
    if (recruteur.etat==true)
      recruteur.etat=false;
    else
      recruteur.etat=true;
    console.log("test2 : "+ recruteur.etat);
    this.compteService.editRecruteur(recruteur)
      .subscribe(data => {
        this.router.navigate(['/pages/recruteurs']);
      });
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  uploadImage() {
    this.progress.percentage = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    console.log(this.currentFileUpload);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }
}
