import {Component, Inject, OnInit} from '@angular/core';
import {NbWindowRef} from "@nebular/theme";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {DemandeService} from "../../services/demande.service";
import {EntretienService} from "../../services/entretien.service";
import {Choixdate} from "../../models/choixdate.model";
import {ActivatedRoute, Params} from "@angular/router";
import {Offre} from "../../models/offre.model";
import {Entretiendate} from "../../models/entretiendate.model";


@Component({
  selector: 'reponse-entretien',
  templateUrl: './reponse-entretien.component.html',
  styleUrls: ['./reponse-entretien.component.scss']
})
export class ReponseEntretienComponent implements OnInit{
  modalTitle: string;
  private demandeId: number;
  choix: Choixdate;
  entretien: Entretiendate = new Entretiendate();

  constructor(private es: EntretienService,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      this.demandeId = Number.parseInt(params['id']);
    });
    this.es.getChoix(this.demandeId)
      .subscribe(data => {
        this.choix = data;
        console.log('1'+ data);
      });
    console.log('ok'+this.choix);

  }
  createEntretienForm(): void {
    this.es.createEntretien(this.entretien)
      .subscribe(data => {
        alert('date et mode de l entretien crée avec succès.');
      });
  }
}
