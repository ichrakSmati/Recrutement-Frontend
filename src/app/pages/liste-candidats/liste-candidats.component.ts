import { Component, OnInit } from '@angular/core';
import {DemandeService} from "../../services/demande.service";
import {Demande} from "../../models/demande.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {NbWindowService} from "@nebular/theme";
import {Offre} from "../../models/offre.model";
import {CandidatService} from "../../services/candidat.service";
import {NotificationService} from "../../services/notification.service";
import {Notif} from "../../models/notif.model";
import {NotifResponse} from "../../models/NotifResponse.model";
import {User} from "../../models/user.model";

// @ts-ignore
@Component({
  selector: 'ngx-liste-candidats',
  templateUrl: './liste-candidats.component.html',
  styleUrls: ['./liste-candidats.component.scss']
})
export class ListeCandidatsComponent implements OnInit {
demandes: Demande[];
  notif:NotifResponse=new NotifResponse();

  private offreId: number;
  mycontent: string;
  private selectedemande: Demande;
private userId:string;
private user:User;
  constructor(private route: ActivatedRoute ,
              private demande: DemandeService,
              private windowService: NbWindowService,
              private router: Router,
              private notificationService:NotificationService,
              private candidatService:CandidatService) {
  }

  ngOnInit() {
    this.userId = localStorage.getItem("Id");
    console.log(this.userId);
    this.candidatService.getUserId(this.userId)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      });
    this.route.params.forEach((params: Params) => {
      this.offreId = Number.parseInt(params['id']);
    });
    this.demande.getdemandesparOffre(this.offreId)
      .subscribe(data => {
        console.log(data);
        this.demandes = data;
      });
  }
  accepte(demande): void {
    this.selectedemande = demande;
    this.demande.accepte(demande)
      .subscribe(data => {
        alert('demande de postulation accepté.');

        this.router.navigate(['/pages/choixentretien/' + this.selectedemande.id]);
      });
  }

  date(demande): void {
    this.selectedemande = demande;
    this.demande.accepte(demande)
      .subscribe(data => {
        this.router.navigate(['/pages/choix/' + this.selectedemande.id]);
      });
  }
  refuser(demande): void {
    this.demande.refuser(demande)
      .subscribe(data => {
        alert('demande de postulation refusé.');
            this.notificationService.notifRefus(demande , this.notif)
              .subscribe(value => {
                console.log(value);
              });
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
