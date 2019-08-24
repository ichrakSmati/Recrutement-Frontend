import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Recruteur} from "../../../models/recruteur.model";
import {CompteService} from "../../../service/compte.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {UploadService} from "../../../service/upload.service";



@Component({
  selector: '',
  templateUrl: './profil.component.html',
})
export class ProfilComponent implements  OnInit {

  oldPwd : string;
  newPwd : string;
  rec : Recruteur = new  Recruteur();
  selectedFiles: FileList;
  currentFileUpload: File = null;
  progress: { percentage: number } = { percentage: 0 };

  constructor(private router: Router, private compteService: CompteService, private uploadService: UploadService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.compteService.getConnectedRecruteur()
      .subscribe(data => {
        this.rec = data;
      });
  }

  edit(){
    this.compteService.editRecruteur(this.rec)
      .subscribe(data => {
        this.router.navigate(['/pages/profil']);
      });
  }

  changePwd(){
    this.compteService.chanePwd(localStorage.getItem("Id"), this.oldPwd, this.newPwd)
      .subscribe(data => {
        this.router.navigate(['/pages/profil']);
      });
  }

  editImage(){
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
    this.rec.photo=this.currentFileUpload.name;
    this.compteService.editRecruteur(this.rec)
      .subscribe(data => {
        this.router.navigate(['/pages/profil']);
      });
  }


  selectFile(event) {
    this.selectedFiles = event.target.files;
  }



}
