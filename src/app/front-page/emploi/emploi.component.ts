import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DemandeService} from "../../services/demande.service";
import {Demande} from "../../models/Demande.model";

@Component({
  selector: 'emploi',
  styleUrls: ['./emploi.component.scss'],
  templateUrl: './emploi.component.html'


})
export class EmploiComponent implements OnInit  {
demandes: Demande[];
private candidatId: number;

constructor(private route: ActivatedRoute ,private router: Router,private demande: DemandeService) { }

ngOnInit() {
  this.route.params.forEach((params: Params) => {
    this.candidatId = Number.parseInt(params['id']);
  });
  this.demande.getdemandesparCandidat(this.candidatId)
    .subscribe(data => {
      console.log(data);
      this.demandes = data;
    });
  console.log(this.demandes);
}
}
