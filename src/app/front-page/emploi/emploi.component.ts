import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DemandeService} from "../../services/demande.service";
import {Demande} from "../../models/Demande.model";
import { MatDialog, MatDialogConfig } from '@angular/material';
import {ReponseEntretienComponent} from "../reponse-entretien/reponse-entretien.component";
import {Offre} from "../../models/offre.model";
import {Candidat} from "../../models/candidat.models";

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

constructor(private route: ActivatedRoute ,private router: Router,private demande: DemandeService, public dialog: MatDialog) { }

ngOnInit() {
  this.route.params.forEach((params: Params) => {
    this.candidatId = '1';
  });
  this.demande.getdemandesparCandidat(this.candidatId)
    .subscribe(data => {
      console.log(data);
      this.demandes = data;
    });
  console.log(this.demandes);
}
  openDialog(): void {
  console.log('ok');
 /*   const dialogRef = this.dialog.open(this.router.Re, {
      width: '250px',
      data: {date: this.date, mode: this.mode}
    });*/

   /* dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.mode = result;
    });*/
  }
  openModal() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };
    const dialogRef = this.dialog.open(ReponseEntretienComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(' Dialog was closed')
      console.log(result)
    });
  }
  Entretien(demande: Demande): void {
    this.selectedDemande = demande;
    this.router.navigate(['/reponse/' + this.selectedDemande.id]);

  }

  }
