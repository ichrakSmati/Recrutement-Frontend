import {Component, OnInit, Pipe} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Demande} from "../../models/demande.model";
import {DemandeService} from "../../services/demande.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Offre} from "../../models/offre.model";
import {EntretienService} from "../../services/entretien.service";
import {Choixdate} from "../../models/choixdate.model";
import {Entretiendate} from "../../models/entretiendate.model";

@Component({
  selector: 'emploi',
  styleUrls: ['./emploi.component.scss'],
  templateUrl: './emploi.component.html'
})
export class EmploiComponent implements OnInit  {

  demandes: Demande[];
  private candidatId: string;
  private selectedDemande: Demande;
  private selectedoffre:Offre;
  choix: Choixdate= new Choixdate();
  entretien: Entretiendate = new Entretiendate();

  constructor(private route: ActivatedRoute, private entretienService: EntretienService, private router: Router,private demande: DemandeService, public dialog: MatDialog) { }

  ngOnInit() {
    this.candidatId = localStorage.getItem("Id");
    this.demande.getdemandesparCandidat(this.candidatId)
      .subscribe(data => {
        console.log(data);
        this.demandes = data;
      });
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



  nbrJoursRestantPourEntretient(){

  }

}

@Pipe({
  name: 'limitTo'
})
export class TruncatePipe {
  transform(value: string, args: string) : string {
    let limit = args ? parseInt(args, 10) : 10;
    let trail = '...';
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }
}
