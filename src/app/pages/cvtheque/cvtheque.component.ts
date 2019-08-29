import { Component, OnInit } from '@angular/core';
import {CandidatService} from "../../services/candidat.service";
import {Candidat} from "../../models/candidat.models";
import * as $ from 'jquery';
import {EntretienService} from "../../services/entretien.service";
import {Entretiendate} from "../../models/entretiendate.model";
import {NotificationService} from "../../services/notification.service";
import {NotifResponse} from "../../models/NotifResponse.model";

declare var $: $;
@Component({
  selector: 'ngx-cvtheque',
  templateUrl: './cvtheque.component.html',
  styleUrls: ['./cvtheque.component.scss']
})
export class CvthequeComponent implements OnInit {
candidats:Candidat[];
  entretien: Entretiendate = new Entretiendate();
  notif:NotifResponse=new NotifResponse();

private Etat:boolean=false;
  constructor(private candidatService:CandidatService,
              private es:EntretienService,
              private notificationService:NotificationService) { }

  ngOnInit() {
    this.candidatService.getCandidat()
      .subscribe(data => {
        console.log(data);
        this.candidats = data;
      });
  }
  send(candidat:Candidat){
    console.log(candidat);
    this.Etat=true;

  }
  entretienForm(candidat:Candidat){
    if(this.entretien.type='true'){
      this.entretien.type='virtuel';
    }else{
      this.entretien.type='classique';
    }    this.es.createEntretienSpontane(this.entretien,candidat)
        .subscribe(data => {
          alert('date et mode de l entretien crée avec succès.');
          this.notificationService.notifEntretien(this.entretien,candidat, this.notif)
            .subscribe(value => {
              console.log(value);
            });
        });
  }

}
