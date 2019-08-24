import { Component, OnInit } from '@angular/core';
import {CandidatService} from "../../services/candidat.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Candidat} from "../../models/candidat.models";
import {ActivatedRoute, Params} from "@angular/router";
import {User} from "../../models/user.model";

@Component({
  selector: 'candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidatComponent implements OnInit{

  progress: { percentage: number } = { percentage: 0 };
  selectedFiles: FileList;
  currentFileUpload: File = null;
  public candidat: User;

  constructor(private route: ActivatedRoute ,private candidatService: CandidatService) { }

  ngOnInit(){

  this.candidatService.getCandidatId(localStorage.getItem('Id'))
    .subscribe(data => {
      console.log(data);
      this.candidat = data;
    });
}

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.progress.percentage = 0;
    console.log('ok');

    this.currentFileUpload = this.selectedFiles.item(0);
    console.log(this.currentFileUpload);

    this.candidatService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
        alert('Cv ajouté avec succès');
      }
    });

   // this.candidat.cv = this.currentFileUpload.name;
    this.selectedFiles = undefined;
  }
}
