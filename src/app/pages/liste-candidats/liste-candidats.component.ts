import { Component, OnInit } from '@angular/core';
import {DemandeService} from "../../services/demande.service";
import {Demande} from "../../models/demande.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NbWindowService} from "@nebular/theme";
import {Offre} from "../../models/offre.model";

// @ts-ignore
@Component({
  selector: 'ngx-liste-candidats',
  templateUrl: './liste-candidats.component.html',
  styleUrls: ['./liste-candidats.component.scss']
})
export class ListeCandidatsComponent implements OnInit {
demandes: Demande[];
  private offreId: number;
  mycontent: string;
  private selectedemande: Demande;

  constructor(private route: ActivatedRoute ,private demande: DemandeService,private windowService: NbWindowService,private router: Router) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.offreId = Number.parseInt(params['id']);
    });
    this.demande.getdemandesparOffre(this.offreId)
      .subscribe(data => {
        console.log(data);
        this.demandes = data;
      });
    console.log(this.demandes);
  }
  accepte(demande): void {
    this.selectedemande = demande;
    this.demande.accepte(demande)
      .subscribe(data => {
        alert('demande de postulation accepté.');
        this.router.navigate(['/pages/choixentretien/' + this.selectedemande.id]);
      });
  }
  refuser(demande): void {
    this.demande.refuser(demande)
      .subscribe(data => {
        alert('demande de postulation refusé.');
      });
  }
  openWindow(demande) {
    this.windowService.open(
      demande,
      {
        title: 'Lettre de motivation',
        context: {
          text: demande.lettreMotivation,
        },
      },
    );
  }
}
