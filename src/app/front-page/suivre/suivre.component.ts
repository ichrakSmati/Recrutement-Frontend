import { Component, OnInit } from '@angular/core';
import {Demande} from "../../models/demande.model";
import {DemandeService} from "../../services/demande.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'ngx-suivre',
  templateUrl: './suivre.component.html',
  styleUrls: ['./suivre.component.scss']
})
export class SuivreComponent implements OnInit {
  etat :string= 'en cours';

  demande: Demande;
  private offreId: number;
  private candidatId:string;
  constructor(private demandeService:DemandeService,private route:ActivatedRoute) { }

  ngOnInit() {

    this.candidatId= localStorage.getItem("Id");

    this.route.params.forEach((params: Params) => {
      this.offreId = Number.parseInt(params['id']);
      console.log(this.offreId);
    });
    this.demandeService.getdemandesparCandidatparoffre(this.candidatId,this.offreId)
      .subscribe(data => {
        console.log(data);
        this.demande = data;
      });

  }

}
