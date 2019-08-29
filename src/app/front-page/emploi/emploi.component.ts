import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {Demande} from "../../models/demande.model";
import {DemandeService} from "../../services/demande.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Offre} from "../../models/offre.model";
import {Choixdate} from "../../models/choixdate.model";
import {Entretiendate} from "../../models/entretiendate.model";
import {EntretienService} from "../../services/entretien.service";

@Component({
  selector: 'emploi',
  styleUrls: ['./emploi.component.scss'],
  templateUrl: './emploi.component.html'


})
export class EmploiComponent implements OnInit  {
  private date:string;
  private mode:string;
  demandes: Demande[];
  modalTitle: string;
  private demandeId: number;
  entretien: Entretiendate = new Entretiendate();
  dateString:string;
  entretiens: Choixdate[];

private candidatId: string;
  private selectedDemande: Demande;
private selectedoffre:Offre;
constructor(private route: ActivatedRoute ,private router: Router,private demandeService: DemandeService,private es: EntretienService) { }
ngOnInit() {
  this.candidatId = localStorage.getItem("Id");
  this.demandeService.getdemandesparCandidat(this.candidatId)
    .subscribe(data => {
      this.demandes = data;
    });
  this.es.getEntretien()
    .subscribe(data => {
      this.entretiens = data;
      console.log('1'+data);
    });
  console.log(this.entretiens);
}

  Entretien(demande: Demande): void {
  this.demandeService.changeEtatDemande(demande);
    this.selectedDemande = demande;
    this.router.navigate(['/reponse/' + this.selectedDemande.id]);

  }
  Suivis(demande: Demande): void {
    this.selectedoffre = demande.offre;
    this.router.navigate(['/suivre/' + this.selectedoffre.id]);

  }
  createEntretienForm(demande: Demande): void {
    this.demandeService.changeEtatDemande(this.es.getdemande(this.demandeId));
    this.es.createEntretien(this.entretien,demande)
      .subscribe(data => {
        alert('date et mode de l entretien crée avec succès.');
      });
  }
}

