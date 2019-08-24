import { Component, OnInit } from '@angular/core';
import {CandidatService} from "../../services/candidat.service";
import {Candidat} from "../../models/candidat.models";

@Component({
  selector: 'ngx-cvtheque',
  templateUrl: './cvtheque.component.html',
  styleUrls: ['./cvtheque.component.scss']
})
export class CvthequeComponent implements OnInit {
candidats:Candidat[];
  constructor(private candidatService:CandidatService) { }

  ngOnInit() {
    this.candidatService.getCandidat()
      .subscribe(data => {
        console.log(data);
        this.candidats = data;
      });
  }

}
