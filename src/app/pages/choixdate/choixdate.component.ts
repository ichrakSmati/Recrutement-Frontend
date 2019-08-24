import { Component, OnInit } from '@angular/core';
import {EntretienService} from "../../services/entretien.service";
import {ActivatedRoute, Params} from "@angular/router";
import {DemandeService} from "../../services/demande.service";
import {Choixdate} from "../../models/choixdate.model";
import {Entretiendate} from "../../models/entretiendate.model";
import {Demande} from "../../models/demande.model";

@Component({
  selector: 'ngx-choixdate',
  templateUrl: './choixdate.component.html',
  styleUrls: ['./choixdate.component.scss']
})
export class ChoixdateComponent implements OnInit {

  constructor(private es: EntretienService,private route: ActivatedRoute,private dem:DemandeService) { }
private demandeId:number;
  private choix:Choixdate;
  entretien: Entretiendate = new Entretiendate();
  demande:Demande;

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.demandeId = Number.parseInt(params['id']);
      console.log(this.demandeId);
    });
    this.es.getChoix(this.demandeId)
      .subscribe(data => {
        this.choix = data;
        console.log('1'+ data);
      });

  }
  createEntretienForm(): void {
    this.dem.changeEtatDemande(this.es.getdemande(this.demandeId));
    this.es.getdemande(this.demandeId).subscribe(data => {
      this.demande= data;
      this.es.createEntretien(this.entretien,this.demande)
        .subscribe(data => {
          alert('date et mode de l entretien crée avec succès.');
        });
    });
  }

}
