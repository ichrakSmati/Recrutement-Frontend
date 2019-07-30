import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DemandeService} from "../../services/demande.service";
import {Demande} from "../../models/Demande.model";

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ReponseEntretienComponent} from "./reponse-entretien/reponse-entretien.component";

@Component({
  selector: 'emploi',
  styleUrls: ['./emploi.component.scss'],
  templateUrl: './emploi.component.html'


})
export class EmploiComponent implements OnInit  {
  private date:string;
  private mode:string;
demandes: Demande[];
private candidatId: number;

constructor(private route: ActivatedRoute ,private router: Router,private demande: DemandeService, public dialog: MatDialog) { }

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
  openDialog(): void {
  console.log('ok');
  console.log(this.dialog);
    let dialogRef = this.dialog.open(ReponseEntretienComponent, {
      width: '250px',
    });
  }

  }
