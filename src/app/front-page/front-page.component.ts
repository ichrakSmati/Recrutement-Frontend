import {Component, OnInit} from '@angular/core';
import {LocationStrategy} from "@angular/common";
import {Candidat} from "../models/candidat.models";
import {ActivatedRoute} from "@angular/router";
import {CandidatService} from "../services/candidat.service";
import {User} from "../models/user.model";

@Component({
  selector: '',
  templateUrl: './front-page.component.html'


})
export class FrontPageComponent implements OnInit{
  cnx:string=null;
  private candidatId:string;
  private candidat: User;
  constructor(private route: ActivatedRoute ,private candidatService: CandidatService) { }

  ngOnInit(): void {
    this.candidatId=localStorage.getItem("Id")
    console.log("candidat"+localStorage.getItem("Id"));
    this.candidatService.getCandidatId(this.candidatId)
      .subscribe(data => {
        console.log(data);
        this.candidat = data;
      });
  }
}
