import { Component, OnInit } from '@angular/core';
import {CandidatService} from "../../services/candidat.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Candidat} from "../../models/candidat.models";
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "../../models/user.model";
import {Observable} from "rxjs";
import {DomSanitizer} from '@angular/platform-browser';


@Component({
  selector: 'candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidatComponent implements OnInit{
  progress: { percentage: number } = { percentage: 0 };
link:string;
  selectedFiles: FileList;
  currentFileUpload: File = null;
  candidat: Candidat;
  candidatId: string;
  showFile = false;
  fileUpload: Observable<string>;
  constructor(private route: ActivatedRoute ,private candidatService: CandidatService) {
  }
ngOnInit(){
  this.candidatId = localStorage.getItem("Id");
  this.candidatService.getCandidatId(this.candidatId)
    .subscribe(data => {
      console.log(data);
      this.candidat = data;
    });
  this.link='../../assets/UploadCV/'+this.candidat.cv;

}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress.percentage = 0;
    console.log('ok');

    this.currentFileUpload = this.selectedFiles.item(0);
    console.log(this.currentFileUpload);
    this.candidat.cv = this.currentFileUpload.name;

    this.candidatService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        this.candidatService.edit(this.candidat)
          .subscribe(data => {
            console.log('File is completely uploaded!');
            alert('Cv ajouté avec succès');
          });
      }
    });
    this.selectedFiles = undefined;
  }
  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUpload = this.candidatService.getFiles(this.candidat.cv);
    }
  }

}
