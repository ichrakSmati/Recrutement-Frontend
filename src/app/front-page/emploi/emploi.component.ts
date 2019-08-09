import {Component, OnInit} from '@angular/core';
import {ReponseEntretienComponent} from "../reponse-entretien/reponse-entretien.component";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {Demande} from "../../models/demande.model";
import {DemandeService} from "../../services/demande.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Offre} from "../../models/offre.model";

@Component({
  selector: 'emploi',
  styleUrls: ['./emploi.component.scss'],
  templateUrl: './emploi.component.html'


})
export class EmploiComponent implements OnInit  {
  private date:string;
  private mode:string;
  demandes: Demande[];
private candidatId: string;
  private selectedDemande: Demande;
private selectedoffre:Offre;
constructor(private route: ActivatedRoute ,private router: Router,private demande: DemandeService, public dialog: MatDialog) { }
ngOnInit() {
  this.candidatId = localStorage.getItem("Id");
  this.demande.getdemandesparCandidat(this.candidatId)
    .subscribe(data => {
      console.log(data);
      this.demandes = data;
    });
  console.log(this.demandes);
}

  Entretien(demande: Demande): void {
  this.demande.changeEtatDemande(demande);
    this.selectedDemande = demande;
    this.router.navigate(['/reponse/' + this.selectedDemande.id]);

  }
  Suivis(demande: Demande): void {
    this.selectedoffre = demande.offre;
    this.router.navigate(['/suivre/' + this.selectedoffre.id]);

  }
  }
