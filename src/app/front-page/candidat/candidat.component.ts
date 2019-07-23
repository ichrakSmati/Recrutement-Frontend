import { Component, OnInit } from '@angular/core';
import {CandidatService} from "../../services/candidat.service";
import {HttpEventType, HttpResponse} from "@angular/common/http";
import {Candidat} from "../../models/candidat.models";

@Component({
  selector: 'candidat',
  templateUrl: './candidat.component.html',
  styleUrls: ['./candidat.component.scss']
})
export class CandidatComponent {
  progress: { percentage: number } = { percentage: 0 };

  selectedFiles: FileList;
  currentFileUpload: File;
  private candidat: Candidat;

  constructor(private candidatService: CandidatService) { }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  create(): void {
    this.upload();
  }
  upload() {
    this.progress.percentage = 0;
    console.log('ok');

    this.currentFileUpload = this.selectedFiles.item(0);

    this.candidatService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

   // this.candidat.cv = this.currentFileUpload.name;
    this.selectedFiles = undefined;
  }
}
